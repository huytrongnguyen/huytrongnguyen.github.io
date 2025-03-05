It's very sweet to use React with ES6:

```
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'

global.jQuery = require('jquery')
global.Tether = require('tether')

render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
), document.getElementById('react-root'))
```

But if you try to build code by using Gulp and Browserify, something like:

```
var buildScript = function (name, entry) {
  if (!entry) {
    entry = PATH.SCRIPT + '/index.jsx';
  }
  var bundler = browserify({
    entries: entry,
    transform: [babelify],
    extensions: ['.jsx', '.js'],
    paths: [ PATH.SCRIPT + '/core/' ],
    debug: true,
    cache: {},
    packageCache: {}
  });
  return bundler.bundle()
      .on('error', function (err) { console.log(err.message); this.emit('end'); })
      .pipe(source(name + '.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest(PATH.JS));
};

gulp.task(TASK.SCRIPT, function () {
  return buildScript('script');
});
```

It would take a lot of time to build and you have a giant script file with many libraries that you put in. It will be paintful if you try to do gulp watch in this case. Let's separate to 2 task to improve a build time. 

First, we must create an array of library:

```
var DEPENDENCIES = [
  'babel-polyfill',
  'jquery',
  'tether',
  'react',
  'react-dom',
  'react-markdown',
  'react-router',
  'immutable'
],
```

Second, we create a gulp task to build the vendor:

```
gulp.task(TASK.FRAMEWORK, function () {
  process.env.NODE_ENV = 'production';
  var bundler = browserify({ debug: false });
  DEPENDENCIES.forEach(function (lib) { bundler.require(lib); });
  return bundler.bundle()
      .pipe(source('framework.min.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest(PATH.LIBS));
});
```

Finally, we update the buildScript function:

```
var buildScript = function (name, entry) {
  if (!entry) {
    entry = PATH.SCRIPT + '/index.jsx';
  }
  var bundler = browserify({
    entries: entry,
    transform: [babelify],
    extensions: ['.jsx', '.js'],
    paths: [ PATH.SCRIPT + '/core/' ],
    debug: true,
    cache: {},
    packageCache: {}
  });
  DEPENDENCIES.forEach(function (lib) { bundler.external(lib); });
  return bundler.bundle()
      .on('error', function (err) { console.log(err.message); this.emit('end'); })
      .pipe(source(name + '.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest(PATH.JS));
};
```

The most important is: ```DEPENDENCIES.forEach(function (lib) { bundler.external(lib); });```

It will exclude every libraries that we included in vendor. Whenever we run gulp watch for buildScript, it would be faster than and create a smaller file.