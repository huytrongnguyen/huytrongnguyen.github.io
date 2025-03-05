# Controlling a React Application with Router

On a normal website, a user navigates to and from different pages as they click links or fill out forms. However, in a single page application, a user's interaction doesn't load a new page. Instead, it is handled within a single page and components react to that interaction. So how do you still allow users to use the browser's forward and back buttons? The answer is to digest URI hash changes with ES6 Decorator. For example:

```js
import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Link, HashRouter } from 'ext-react';

@Route('/')
class Dashboard extends Component {
  render() {
    return <h1>Dashboard</h1>
  }
}

@Route('/search')
class Search extends Component {
  render() {
    return <h1>Search</h1>
  }
}

@Route('/details/:name')
export default class Details extends Component {
  render() {
    return <h1>{this.props.params.name}</h1>
  }
}

@Route('*')
export default class NotFound extends Component {
  render() {
    return <h1>Not Found</h1>
  }
}

class Viewport extends Component {
  render() {
    return <section>
      <Link to="/">Dashboard</Link>
      <Link to="/search">Search</Link>
      <Link to="/details/huynguyen">Details</Link>
      <HashRouter />
    </section>
  }
}

render(<Viewport />, document.getElementById('react-root'));
```

With the example above, you can see we have 3 things:

  * `Route` decorator is most basic responsibility is to render UI when a location matches the route's path.
  * `Link` provides declarative, accessible navigation around your application.
  * `HashRouter` uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

## Implement Routing in your Application

First, you will need an object to store all the routes:

```js
const ROUTES = {};
```

Then you can build a `Route` decorator to map *route* to *component*:

```js
export function Route(route) {
  return comp => {
    ROUTES[route] = {
      route,
      comp,
      path: route.split('/')
    }
  }
}
```

You also need a `Link` component to navigate:

```js
export class Link extends Component {
  render() {
    const { to = '', className = '', activeClassName = 'active', text, children, ...others } = this.props;
    return <a href={`#${to}`} className={`${nav-link} ${className} ${to === (window.location.hash.substring(1) || '/') ? activeClassName : ''}`} {...others}>
      {text || children}
    </a>
  }
}
```

Finally, you need a `viewport` to change a `component` based on `route` whenever URI hash changes:

```js
export class HashRouter extends Component {
  constructor(props) {
    super(props);
    this.state = matchPath();
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.computePath);
  }

  render() {
    const { route, comp, params } = this.state;

    if (!comp) {
      console.error('Component not found!');
      return null;
    }

    return React.createElement(comp, { route, params });
  }

  @bind
  computePath() {
    this.setState(matchPath());
  }
}
```

The very important part is `matchPath` function, the place where you detect a component and return:

```js
function matchPath() {
  const params = {},
        currentRoute = window.location.hash.substring(1) || '/';

  // basic route (without params)
  if (ROUTES[currentRoute]) {
    return { route: currentRoute, comp: ROUTES[currentRoute].comp, params };
  }

  // advanced route (with params)
  const currentPath = currentRoute.split('/');
  for(let route in ROUTES) {
    const mapRoute = ROUTES[route],
          routePath = mapRoute.path;

    let matched = true;
    List(mapRoute.path).each((routeName, index) => {
      if (routeName !== currentPath[index]) {
        if (routeName.startsWith(':')) { // detect param value
          params[routeName.substring(1)] = currentPath[index];
        } else {
          matched = false;
          return;
        }
      }
    });

    if (matched) {
      return { route: currentRoute, comp: mapRoute.comp, params };
    }
  }

  // with not found screen
  if (ROUTES['*']) {
    return { route: currentRoute, comp: ROUTES['*'].comp, params };
  }

  // without not found screen
  return { route: currentRoute, comp: null, params };
}
```

This is what I did in [Extension React](https://npmjs.org/package/ext-react)library.

[![ext-react](https://nodei.co/npm/ext-react.png?downloadRank=true&downloads=true)](https://npmjs.org/package/ext-react)

