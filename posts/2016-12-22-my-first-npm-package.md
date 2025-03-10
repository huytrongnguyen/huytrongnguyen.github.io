This project is divided in multiple parts

# Installation

You'll need both React and React Lazy:

`npm install --save react rc-lazy`

# LazyContainer

A JAVASCRIPT LIBRARY FOR BUILDING DATA-DRIVEN REACT APPLICATIONS

As we know, React has no networking/AJAX features. You can see this article: [http://andrewhfarmer.com/react-ajax-best-practices/](http://andrewhfarmer.com/react-ajax-best-practices/)
I like Relay but it only works with GraphQL. Then I make a small library based on Relay concept and mix it with Comtainer Components and it works with RESTful backends.

![Alt](http://andrewhfarmer.com/react-ajax-best-practices/img/container-components.png "Container Components")
![Alt](http://andrewhfarmer.com/react-ajax-best-practices/img/relay.png "Relay")

It doesn't violate "separation of concerns" design principle since we do not have any real AJAX request in presentation component. Every AJAX requests lives in container component called LazyContainer.
The response data will be pushed into the state so that UI can change whenever state change.

## Usage

### Containers

Create a React component extends from LazyContainer:

```javascript
import React from 'react'
import { LazyContainer, MutationType, Store } from 'rc-lazy'

Store.BASE_URL = '/api'

class MyComponent extends LazyContainer {
  constructor(props) {
    super(props)
    this.state = { TestData: [] }
  }

  render() {
    const { TestData } = this.state
    return <div>
      <p>{JSON.stringify(TestData)}</p>
    </div>;
  }
}

MyComponent.defaultProps = {
  endpoint: 'system'
}

export default MyComponent
```

You can setup network layer throught Store.BASE_URL. In this case, when you setup ```Store.BASE_URL = '/api'```, every AJAX requests will call to ```http://<IP Server>:<Port>/api/```

You need to setup the endpoint to make an AJAX request to ```http://<IP Server>:<Port>/api/<endpoint>``` throught defaultProps:

```javascript
MyComponent.defaultProps = {
  endpoint: 'system'
}
```

The response data will be pushed to state so that UI can change whenever state changes.

In case you want to add some query params, just change the endpoint fragment:

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

If you want to do something with the response data before it's pushed to state, just add the resolve function like below:

```javascript
MyComponent.defaultProps = {
  endpoint: 'master-data/card',
  resolve: response => {
    // Do something with response before return
    return response
  }
}
```

### Mutations

Add mutations fragment into defaultProps, type can be MutationType.POST, MutationType.PUT, MutationType.DELETE.

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

As you can see from above, we add ```login``` to mutations fragment as a POST request and it will call to ```http://<IP Server>:<Port>/api/security/login```
Then you can call ```login``` as a function and add the record, success function and failure function like this:
Here's an example of this mutation in use:

```javascript
  handleLogin() {
    this.props.lazy.login({
      record: {
        Id: "my_id",
        Password: "my_password"
      },
      success: response => {
        console.log(response)
      },
      failure: () => {
        // Do something when it's failure
      }
    })
  }
```

We pass an object as a parameter into login function with the format:

```javascript
{
  record:  { ... }, // data to be sent to the server
  success: response => { ... }, // a function to be called if the request succeeds.
  failure: response => { ... } // a function to be called if the request fails.
}
```
