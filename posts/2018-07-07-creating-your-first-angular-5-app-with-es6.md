# Creating your first Angular 5 app with ES6

In this post, I would like to provide the way we can implement an Angular app without TypeScript.

## The structure of this project

```
├── src/
│   ├── app.component.html
│   ├── app.component.js
│   ├── app.module.js
│   ├── app.js
└── index.html
```

## Prepare the project

```json
{
  "name": "angular-demo",
  "version": "5.2.9",
  "scripts": {
    "build": "webpack",
    "serve": "webpack && webpack-dev-server --hot --inline --open"
  },
  "babel": {
    "presets": [ "env" ],
    "plugins": [
      "transform-decorators-legacy"
    ],
    "ignore": "node_modules"
  },
  "dependencies": {
    "@angular/common": "5.2.9",
    "@angular/compiler": "5.2.9",
    "@angular/core": "5.2.9",
    "@angular/platform-browser": "5.2.9",
    "@angular/platform-browser-dynamic": "5.2.9",
    "@angular/router": "5.2.9",
    "rxjs": "5.5.8",
    "zone.js": "0.8.25"
  },
  "devDependencies": {
    "babel-core": "6.26.0",
    "babel-loader": "7.1.4",
    "babel-plugin-transform-decorators-legacy": "1.3.4",
    "babel-preset-env": "1.6.1",
    "raw-loader": "0.5.1",
    "webpack": "3.6.0",
    "webpack-dev-server": "2.7.1"
  }
}
```

The hardest thing of this project is how can we use a decorator in ES6. Fortunately, Babel supported us with `transform-decorator-legacy`

And you can see I defined `webpack` in `package.json`, that’s mean I use webpack to build the project. But you totally can use `gulp` or other build tool, I think it’s not a big deal :)

```js
// wepack.config.js

import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  entry: {
    'js/vendor': [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      'rxjs',
      'zone.js',
    ],
    'js/app': './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: `[name].js`
  },
  module: {
    loaders: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'js/vendor', filename: 'js/vendor.js' }),
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client')),
  ]
}
```

I have to add `webpack.ContextReplacementPlugin` to prevent the warning on browser. That issue is logged in Github:

[Webpack warning ./node_modules/@angular/core/esm5/core.js · Issue #20357 · angular/angular](https://github.com/angular/angular/issues/20357)


Now prepare the `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Angular Demo</title>
  </head>
  <body>
    <my-app></my-app>
    <script src="dist/js/vendor.js"></script>
    <script src="dist/js/app.js"></script>
  </body>
</html>
```

## Create your first component

I recommend that we should separate the component to 2 files

```html
<h1>{{ title }}</h1>
```

```js
// app.component.js

import { Component } from '@angular/core';
import template from './app.component.html';

@Component({
  selector: 'my-app',
  template,
})
export class AppComponent {
  constructor() {
    this.title = 'Tour of Heroes';
  }
}
```

The small different from TypeScript is we have to define title in constructor

## Startup your app

Firstly, we have to declare an Angular module

```js
// app.module.js

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
  ],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
```

Secondly, we bootstrap the project in `app.js`

```js
// app.js

import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

Do not forget to import `zone.js`, if not then we will get the error requires Zone.js prolyfill

[Angular2 Final Release - "Error: Angular requires Zone.js prolyfill"](https://stackoverflow.com/questions/39592949/angular2-final-release-error-angular-requires-zone-js-prolyfill)

Finally, start your project with `npm run serve`.

This is just a very simple app, follow the Angular tutorial.