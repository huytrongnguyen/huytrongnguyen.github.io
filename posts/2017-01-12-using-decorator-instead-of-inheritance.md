Instead of inheritance from LazyContainer, now you can use dataContainer decorator. Everything you put to defaultProps before now you can put to decorator as below:

```javascript
import React, { Component } from 'react'
import { dataContainer, MutationType, Store } from 'rc-lazy'

Store.BASE_URL = '/api'

@dataContainer({
  endpoint: {
    name: 'system',
    initialVariables: () => {
      return {
        page: 1,
        size: 20
      }
    }
  }
})
class MyComponent extends Component {
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

export default MyComponent
```

I publish another library for this changes called rc-model: `npm install --save react rc-model`