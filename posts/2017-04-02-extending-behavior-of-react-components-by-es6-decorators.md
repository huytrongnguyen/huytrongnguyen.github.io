I just published a new library is called [Extension React](https://npmjs.org/package/ext-react) that helps you to write React applications by composing a component, adding application logic in services then boxing them in container.

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

At first, you need to define the root component and launch the app by using ```Rext.bootstrap``` function:

```javascript
import React, { Component } from 'react'
import { Route } from 'ext-react'
import Dashboard from './dashboard/dashboard'

export default class App extends Component {
  render() {
    return <section>
      <Route path="/" component={Dashboard} />
    </section>
  }
}

Rext.bootstrap({
  selector: 'react-root',
  component: App,
  onInit: () => {
    // function will be fired before the App component be rendered
  }
})
```

You have to use ```Route``` component to define which component should be loaded corresponding to the URL.

Next, you define a data store in a class with ```@Store``` decorator, store will load data via ```proxy```:

```javascript
import { Store } from 'ext-react'

@Store
export default class DashboardStore {
  constructor() {
    this.proxy = {
      url: '/api/dashboard'
    }
  }
}
```

```@Store``` decorator apply the higher-order functions that returns a ```DataStore``` that provides functions to fetch and mutate data:

```javascript
import Ext from '~/core/ext'
import Ajax from '~/data/ajax'

export default (Store) => {
  Store = new Store
  class DataStore {
    constructor() {
      Ext.extend(DataStore.prototype, {
        name: Store.constructor.name,
        proxy: Store.proxy,
        data: []
      })
    }

    clearData() {
      this.data = []
    }

    loadData(data) {
      Ext.extend(this.data, data)
    }

    async load() {
      this.clearData()
      const response = await Ajax.request({ url: this.proxy.url })
      response && this.loadData(response)
      return this
    }
  }

  return new DataStore
}
```

And then, you define a component's view:

```javascript
import React, { Component } from 'react'
import { Container } from 'ext-react'
import DashboardStore from '~/store/dashboard'

@Container({
  stores: [DashboardStore]
})
export default class Dashboard extends Component {
  render() {
    const { data } = this.props.store.DashboardStore
    return <section className="container-fluid">
      <table className="table table-sm table-hover table-striped">
        <thead>
          <tr>
            <th>Status</th>
            <th className="text-sm-right">Total Records</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(item =>
            <tr>
              <td>{item[0]}</td>
              <td className="text-sm-right">{item[1]}</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  }
}
```

The ```@Container``` decorator apply the hihger-order components that provides a data stores to component's view via ```props.store```. Note that you can load multiple data stores in one component:

```javascript
import React, { Component } from 'react'
import List from '~/core/list'

export default (config) => (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stores: this.prepareStores(config.stores)
    }
  }

  async componentDidMount() {
    const { stores } = this.state
    for (let name in stores) {
      await stores[name].load()
    }
    this.setState(() => ({ stores }))
  }

  render() {
    return <WrappedComponent stores={this.state.stores} />
  }

  prepareStores(stores) {
    return List.of(config.stores).reduce((stores, store) => {
      stores[store.name] = store
      return stores
    }, {})
  }
}
```

Now I'm trying to implement a service to separate the component'view and component's logic.