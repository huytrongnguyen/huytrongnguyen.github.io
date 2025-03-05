# From AngularJS 1.2 to AngularJS 1.6

3 years ago, I used AngularJS 1.2 but I decided to change to ReactJS since they released an Angular 2 with completely difference.

For some reason, now I'm assigned to the project that's using Angular 1.6 then I have to learn it again. I read many posts from:

[AngularJS articles, by Todd Motto](https://toddmotto.com/angularjs/)

I also read the style guide from:

[toddmotto/angularjs-styleguide](https://github.com/toddmotto/angularjs-styleguide)

And I'm very surprised with many changes from 1.2

Then I would like to share what's changed from Angular 1.2 to Angular 1.6 in this post

## Starting from AngularJS 1.2

I prepare the project from AngularJS 1.2 follow the latest AngularJS Style Guide so that we can see what's changed from time to time

At first, we need to setup `package.json`

```json
{
  "name": "angular-cms",
  "version": "1.2.32",
  "scripts": {
    "build": "webpack",
    "serve": "yarn build && webpack-dev-server --hot --inline --open"
  },
  "babel": {
    "presets": [
      "env"
    ],
    "ignore": "node_modules"
  },
  "dependencies": {
    "@uirouter/angularjs": "1.0.15",
    "angular": "1.2.32",
    "babel-polyfill": "6.26.0",
    "bootstrap": "4.0.0",
    "font-awesome": "4.7.0",
    "jquery": "3.3.1",
    "popper.js": "1.14.3"
  },
  "devDependencies": {
    "babel-core": "6.26.0",
    "babel-loader": "7.1.4",
    "babel-preset-env": "1.6.1",
    "css-loader": "0.28.11",
    "extract-text-webpack-plugin": "3.0.2",
    "gulp": "3.9.1",
    "ng-annotate-loader": "0.6.1",
    "node-sass": "4.8.3",
    "raw-loader": "0.5.1",
    "sass-loader": "6.0.7",
    "style-loader": "0.20.3",
    "webpack": "3.6.0",
    "webpack-dev-server": "2.7.1"
  }
}
```

The scalable file structure should be

```
├── app/
│   ├── components/
│   │  ├── home/
│   │  │  ├── home.component.js
│   │  │  ├── home.html
│   │  └── components.module.js
│   ├── common/
│   │  ├── navbar/
│   │  │     ├── navbar.component.js
│   │  │     ├── navbar.html
│   │  └── common.module.js
│   ├── app.module.js
└── index.html
```

A little bit setup in `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>AngularJS</title>
  </head>
  <body ng-app="app">
    <section navbar></section>
    <section ui-view></section>
    <script src="dist/js/vendor.min.js"></script>
    <script src="dist/js/app.min.js"></script>
  </body>
</html>
```

Create `HomeComponent`

```js
export default class HomeComponent {
  constructor() {
    this.title = 'Hello from AngularJS';
  }
}
```

Then setup `ComponentModule`

```js
import angular from 'angular';
import HomeComponent from './home/home.component';
import homeTemplate from './home/home.html';

export default angular
    .module('app.components', [])
    .controller('HomeComponent', HomeComponent)
    .config(($stateProvider, $urlRouterProvider) => {
      'ngInject';
      $stateProvider
          .state('home', { url: '/', template: homeTemplate, controller: 'HomeComponent as home' });
      $urlRouterProvider.otherwise('/');
    });
```

Create `NavbarComponent`

```js
import template from './navbar.html';

class NavbarController {
  constructor() {
    this.title = 'Navbar here';
  }
}

export default {
  replace: true,
  template,
  controller: NavbarController,
  controllerAs: 'navbar'
}
```

Then setup `CommonModule`

```js
import angular from 'angular';
import NavbarComponent from './navbar/navbar.component';

export default angular
    .module('app.common', [])
    .directive('navbar', () => NavbarComponent);
```

Finally, setup `AppModule`

```js
import 'babel-polyfill';
import angular from 'angular';
import CommonModule from './common/common.module';
import ComponentModule from './components/components.module';

angular.module('app', [
    'ui.router',
    'app.common',
    'app.components',
]);
```

## Small change in AngularJS 1.3 and 1.4

AngularJS 1.3 first time introduces one-time binding just to enhance the performance. I remember ReactJS was very popular at this time and Angular Team decided to release Angular 2. Todd was explained very detail in this post

[AngularJS one-time binding syntax](https://toddmotto.com/angular-one-time-binding-syntax/)

They also prepare for a big change in next version by provide `controllerAs` and `bindToController` property

[Killing it with Angular Directives; Structure and MVVM](https://toddmotto.com/killing-it-with-angular-directives-structure-and-mvvm/)

[No $scope soup, bindToController in AngularJS](https://toddmotto.com/no-scope-soup-bind-to-controller-angularjs/)

## Big change in AngularJS 1.5

From AngularJS 1.5, `directive` is replaced by `component`

Firstly, you need to upgrade AngularJS version from 1.2.32 to 1.5.11 in `package.json`

Secondly, a small change in `CommonModule`

```js
import angular from 'angular';
import NavbarComponent from './navbar/navbar.component';

export default angular
    .module('app.common', [])
    .component('navbar', NavbarComponent);
```

In index.html, you have to declare `<navbar></navbar>`, cannot use `<section navbar></section>` anymore since we killed off directive.

Finally, kill off `controller` too

```js
// home.component.js

import template from './home.html';

class HomeController {
  constructor() {
    this.title = 'Hello from AngularJS';
  }
}

export default {
  template,
  controller: HomeController,
  controllerAs: 'home'
}
```

```js
// component.module.js

import angular from 'angular';
import Home from './home/home.component';

export default angular
    .module('app.components', [])
    .component('home', Home)
    .config(($stateProvider, $urlRouterProvider) => {
      'ngInject';
      $stateProvider
          .state('home', { url: '/', component: 'home' });
      $urlRouterProvider.otherwise('/');
    });
```


You can read more about `component` from
[Exploring the Angular 1.5 .component() method](https://toddmotto.com/exploring-the-angular-1-5-component-method/)

Further more, we can also use `$onInit` like Angular 2+

[$onInit and new](https://toddmotto.com/on-init-require-object-syntax-angular-component/)

Beside that, Todd also explains detail about the AngularJS 1.5 life cycle hook

[Lifecycle hooks in Angular 1.5](https://toddmotto.com/angular-1-5-lifecycle-hooks)

So what's changed in AngularJS 1.6?

As far as I know, AngularJS 1.6 just correct the `$onInit`, support some methods for State Management.

[Angular 1.6 is here, this is what you need to know](https://toddmotto.com/angular-1-6-is-here)
