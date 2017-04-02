I just published a new library is called [Extension React](https://npmjs.org/package/ext-react) that helps you to write React applications by composing a component, adding application logic in services then boxing them in container.

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

###### Construct and launch the app

At first, you need to define the root component and launch the app by using ```Rext.bootstrap``` function:

```js
import React, { Component } from 'react'
import Rext from 'ext-react'
import App from './components/app'
Rext.bootstrap({
  selector: 'react-root',
  component: App,
  onInit: () => {
    // function will be fired before the App component be rendered
  }
})
```

This file is very stable. Once you've set it up, you may never change it again.

###### Screen Navigation

```js
import React, { Component } from 'react'
import { Route, Link } from 'ext-react'
import Dashboard from './dashboard/dashboard'
import Search from './search/search'

export default class App extends Component {
  render() {
    return <section>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className="nav-link">Search</Link>
        </li>
      </ul>
      <Route index component={Dashboard} />
      <Route path="/search" component={Search} />
    </section>
  }
}
```

The ```Route``` component is a basic responsibility to render some UI when a location matches the route's path while ```Link``` provides declarative, accessible navigation around your application. It's very similar to ```react-router``` v4.

###### Manage application state

```js
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

Stores manage the application state for a particular domain within the application. Stores load data via ```proxy```, you can define a proxy follow this structure:

```js
{
  url: /* The URL from which to request the data object */,
  method: /* GET, POST, PUT, DELETE. Default is GET */
  params: /* request parameters sent as json data */
}
```

A ```@Store``` decorator apply the higher-order functions that returns a ```DataStore``` that provides functions to fetch and mutate data:

```js
import Ext from '~/core/ext'
import Ajax from '~/data/ajax'
import Observable from '~/events/observable'

export default (Store) => {
  Store = new Store
  class DataStore {
    constructor() {
      Ext.extend(DataStore.prototype, {
        name: Store.constructor.name,
        proxy: Store.proxy,
        autoLoad: Store.autoLoad,
        observable: Observable.create(),
        data: []
      })
    }

    clearData() {
      this.data = []
    }

    loadData(data) {
      Ext.extend(this.data, data)
      this.observable.call(this)
    }

    async load(proxy) {
      this.clearData()
      const response = await Ajax.request(proxy || this.proxy)
      response && this.loadData(response)
      return this
    }
  }

  return new DataStore
}
```

###### Container Components

```js
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

The ```@Container``` decorator will provide a data stores to component's view. Note that you can load multiple data stores in one component, all data stores will be placed in ```props.store```.

The ```@Container``` decorator apply the hihger-order components to control the components, register a subscriber to reload data when ```DataStore``` is loaded.

```js
import React, { Component } from 'react'
import List from '~/core/list'
import Observable from '~/events/observable'

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
      if (stores[name].autoLoad) {
        await stores[name].load()
      }
    }
    this.setState(() => ({ stores }))
  }

  render() {
    return <WrappedComponent stores={this.state.stores} />
  }

  prepareStores(stores) {
    return List.of(config.stores).reduce((stores, store) => {
      store.observable.subscribe(store => this.onDataChanged(store))
      stores[store.name] = store
      return stores
    }, {})
  }

  onDataChanged(store) {
    const { stores } = this.state
    stores[store.name] = store
    this.setState(() => ({ stores }))
  }
}
```

###### Observer pattern

Then ```Observable.create``` is an alias for the ```Observable``` constructor, you can call the ```subscribe``` function after create the observable.

```js
const observable = Observable.create()

observable.subscribe(store => {
  const { stores } = this.state
  stores[store.name] = store
  this.setState(() => ({ stores }))
})
```

Whenever ```Observable``` is called, the ```subscribe``` function will be fired:

```js
observable.call(/* observer */)
```

###### Separation of Concerns

At first, you define a simple store:

```js
import { Store } from 'ext-react'

@Store
export default class FamilyStore {
  constructor() {
    this.proxy = {
      url: '/api/family'
    }
  }
}
```

Next, define a search screen with 2 component: search form and search result. Search form will fire an action to search while search result will receive a response from search

```js
import React, { Component } from 'react'
import FamilyStore from '~/stores/family'
import FamilyService from '~/services/family'
import { Button } from '~/components/bootstrap'

export default class Search extends Component {
  render() {
    return <section>
      <h1>Search</h1>
      <SearchForm />
      <SearchResult />
    </section>
  }
}

class SearchForm extends Component {
  render() {
    return <section>
      <Button text="Search" onClick={() => this.onSearch()} />
    </section>
  }

  onSearch() {
    FamilyService.search({ status: 1, category: 1 })
  }
}

@Container({
  stores: [FamilyStore]
})
export default class SearchResult extends Component {
  render() {
    return <section></section>
  }
}
```

Finally, you just define a ```FamilyService``` like this:

```js
import { Service } from 'ext-react'
import FamilyStore from '~/stores/family'

@Service
export default class FamilyService {
  search(criteria) {
    FamilyStore.load({
      url: '/api/family',
      method: 'post',
      params: criteria
    })
  }
}
```

When ```FamilyStore``` is loaded, it will fire an action to ```Container``` to reload data. Data will be updated in ```this.props.stores```.
