I just published a new library is called [Extension React](https://npmjs.org/package/ext-react) that helps you to write React applications by composing a component, adding application logic in services then boxing them in container.

At first, you need to define the root component and launch the app by using ```Rext.bootstrap``` function:

```javascript
import React, { Component } from 'react'
import Rext, { Route } from 'rc-lazy'
import Dashboard from './dashboard/dashboard'

export default class App extends Component {
  render() {
    return <section>
      <Route path="/" component={Dashboard} />
    </section>
  }
}

Rext
.bootstrap(App, document.getElementById('react-root'), () => {
  // function will be fired before the App component be rendered
})
```

You have to use ```Route``` component to define which component should be loaded corresponding to the URL.

Next, you define a component's logic in a class with ```@Service``` decorator. ```init``` function will be called at the first of component's lifecycle:

```javascript
import Rext, { Service } from 'ext-react'

@Service
export default class DashboardService {
  init() {
    return Rext.ajax('/api/dashboard','GET')
  }
}
```

And then, you define a component's view:

```javascript
import React, { Component } from 'react'
import { Container } from 'rc-lazy'
import DashboardService from '~/services/dashboard'

@Container({
  service: DashboardService
})
export default class Dashboard extends Component {
  render() {
    const { data } = this.props.store
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

The ```@Container``` decorator will provide a data and behavior to component's view by specifying the corresponding service. All datas will be placed in ```props.store``` and you can run any component's logic through ```props.service```.