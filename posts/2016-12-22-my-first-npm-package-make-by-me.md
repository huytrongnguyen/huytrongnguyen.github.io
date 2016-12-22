I just released my first NPM package: https://www.npmjs.com/package/rc-lazy (React for lazy guys)

As we know, React has no networking/AJAX features. You can see the article: http://andrewhfarmer.com/react-ajax-best-practices/

I like Relay but it only works with GraphQL. Then I make a small library based on Relay source code but it will work with RESTful backends.

## Installation

You'll need both React and React Utils:

`npm install --save react rc-lazy`


## LazyContainer

Library for React and RESTful backends


### Usage

Create a React component extends from LazyContainer:

```javascript
import React from 'react'
import { LazyContainer, MutationType, Store } from 'rc-lazy'

class MyComponent extends LazyContainer {
  constructor(props) {
    super(props)
    Store.BASE_URL = '/api'
    this.state = {
      TestData: []
    }
  }

  render() {
    const { TestData } = this.state
    return <div>
      <p>{JSON.stringify(TestData)}</p>
      <input type="button" text="Login" onClick={() => this.login()} />
    </div>;
  }

  login() {
    this.props.lazy.login({
      record: {
        Id: "my_id",
        Password: "my_password"
      },
      success: response => {
        console.log(response)
      },
      failure: response => {
        console.log(response)
      }
    })
  }
}

MyComponent.defaultProps = {
  endpoint: 'system'
}

export default MyComponent
```

MyComponent will load and make an AJAX request to ```http://<IP Server>:<Port>/api/system``` to get the data.

The response data will look like:

```json
{
  TestData: [{...}]
}
```

In case we want to make a POST request to ```http://<IP Server>:<Port>/api/system/login```, add the mutations object into defaultProps:

```javascript
MyComponent.defaultProps = {
  endpoint: 'system',
  mutations: {
    login: {
      type: MutationType.POST,
      path: 'security/login'
    }
  }
}
```

Then you can call ```login``` as a function like this:

```javascript
this.props.lazy.login({
  record: {
    Id: "my_id",
    Password: "my_password"
  },
  success: response => {
    console.log(response)
  },
  failure: response => {
    console.log(response)
  }
})
```

In case we want to add some query params, just change the endpoint:

```javascript
MyComponent.defaultProps = {
  endpoint: {
    name: 'system',
    initialVariables: () => {
      return {
        page: 1,
        size: 20
      }
    }
  }
}
```