# Comparison of ASP.NET and Node.js for Backend Programming

Copied from https://gist.github.com/ilyaigpetrov/f6df3e6f825ae1b5c7e2

We will compare ASP.NET and Node.js for backend programming.
[Source codes from examples](https://github.com/ilyaigpetrov/report-asp.net-vs-node.js-for-backend).

## Updates

This document was published on 21.09.2015 for a freelance employer. Some changes since then (14.02.2016):

1. Koa.js no longer uses co-routines, it has switched to Babel's `async/await`. `yield` and `await` are used almost in the same way, so I see no point to rewrite the examples.
2. To meet the deadline this article was made in haste based on googling, basic experimentation and superficial coding experience. This is a _sketch_ with mistakes and subjective claims, not a thorough guide. Double check before any serious usage.

## Table of contents

1. [Comparing Apples to Oranges](#comparing-apples-to-oranges)
2. [What is ASP.NET?](#what-is-aspnet)
3. [Processing Models](#processing-models)
4. [Programming Languages](#programming-languages)
5. [Support for Asynchronous Programming](#support-for-asynchronous-programming)
 - [`yield` Example, Koa.js](#yield-example-koajs)
 - [Examples: `if-else` Asynchronous Flow](#examples-if-else-asynchronous-flow)
  -- [`if-else` Example, Express.js](#if-else-example-expressjs)
  -- [`if-else` Example, Koa.js](#if-else-example-koajs)
 - [Examples: Asynchronous Calls to HackerNews JSON API](#examples-asynchronous-calls-to-hackernews-json-api)
  -- [HN JSON API, ASP.NET 5 Beta](#hn-json-api-aspnet-5-beta)
  -- [HN JSON API, ASP.NET 4.5/Katana](#hn-json-api-aspnet-45katana)
  -- [HN JSON API, Bare Node.js](#hn-json-api-bare-nodejs)
  -- [HN JSON API, Node.js/co@tj](#hn-json-api-nodejscotj)
6. [Simplicity](#simplicity)
 - [HelloWorld Examples](#helloworld-examples)
  -- [HelloWorld, Express.js](#helloworld-expressjs)
  -- [HelloWorld, Koa.js](#helloworld-koajs)
  -- [HelloWorld, ASP.NET 5 Beta](#helloworld-aspnet-5-beta)
  -- [HelloWorld, ASP.NET 4.5/Katana](#helloworld-aspnet-45-katana)
  -- [HelloWorld, ASP.NET 4.5 Web API 2](#helloworld-aspnet-45-web-api-2)
7. [Simplicity Summary](#simplicity-summary)
8. [Learnability](#learnability)
9. [Abstractions and Conventions](#abstractions-and-conventions) <small>(ASP.NET MVC 5/Web API 2 vs Node.js)</small>
10. [Performance](#performance)
- [ASP.NET MVC 4/Web API vs Node.js](#aspnet-mvc-4web-api-vs-nodejs)
- [C#/Mono vs Node.js/V8](#cmono-vs-nodejsv8)
11. [Ecosystem](#ecosystem)
12. [Features Check List](#features-check-list)
 - [Paradigms Support](#paradigms-support)
 - [Cost](#cost)
 - [Readability](#readability)
 - [Reliability](#reliability)
 - [Generality](#generality)
 - [Portability](#portability)
 - [Orthogonality](#orthogonality)
 - [Maintainability](#maintainability)
 - [Efficiency](#efficiency)
 - [Memory Management](#memory-management)
 - [Type Checking](#type-checking)
 - [Concurrency](concurrency)
13. [Summary](#summary)
14. [Other Materials Used](#other-materials-used)
15. [Principles behind Node.js and C#/ASP.NET/ASP.NET MVC](#principles-behind-nodejs-and-caspnetaspnet-mvc)


### Comparing Apples to Oranges

To compare two distinct concepts we need an aim.
We can compare apples to oranges only if we know the aim, e.g. our aim may be to figure out which fruit is less harmful for nutrition of small children, which is better for public speakers (produces less harm to the throat) and so on.
Purpose described as 'backend programming' is very broad, within it there are tasks which are better suited for Node.js as well as there are such for ASP.NET.
In this report we will narrow down our comparison to:

1. Support for asynchronous programming.
2. Robustness of the languages.
3. Simplicity of the code and deployment.
4. We will be comparing:
  - Node.js and ASP.NET 4.5,
  - Bleeding edge `ASP.NET 5 Beta` (vNext) and `Node.js` with `--harmony` flag,
  - You may also compare Node.js and Node.js `harmony`, ASP.NET 4.5 and ASP.NET 5 Beta.

The reason for comparing unstable brunches is that Microsoft is striving to adopt strong sides of Node.js in their latest ASP.NET so it closely resembles and mimics Node.js.
ASP.NET 5 Beta is a striking competitor within .NET and asynchronous programming though it is not production ready yet.
Framework ASP.NET 4.5 holds only core functionality and hardly could be compared to Node.js, instead we will be comparing Node.js with ASP.NET 4.5/Katana or Web API 2.
Katana is a layer of abstraction between .NET web application and the underlying server, it offers low-level handling of requests using middlewares (like Node.js).
ASP.NET 4.5/Web API 2 is described as:
> ...an ideal platform for building RESTful applications.

We consider Web API because it is low-level as well.
In some cases we will consider ASP.NET MVC. But the current stable ASP.NET MVC 5 (framework) and Node.js (runtime environment) are so different that it's hard to compare them.

### What is ASP.NET?

ASP.NET  is a web application framework by Microsoft.
ASP.NET offers common functionality for others frameworks on top of it:
ASP.NET Web Pages, ASP.NET Web Forms, ASP.NET MVC, etc.
For example, ASP.NET includes such common functionality as facilities for managing requests, handling sessions and a login security model based around membership.
These frameworks has different goals, may be used together and will be merged into ASP.NET vNext.

The following diagrams present ASP.NET architecture in relation to other frameworks.

Diagram of ASP.NET 5 by [Scott Hanselman](http://www.hanselman.com/blog/ReleasedASPNETAndWebTools20122InContext.aspx), 2013:
![ASP.NET Architecture by Scott Hanselman, 2013](https://i.imgur.com/WheuJOL.png)


Diagram of ASP.NET 4.5 by [Shailendra Chauhan](http://www.dotnet-tricks.com/Tutorial/aspnet/SaJc221013-Understanding-Detailed-Architecture-of-ASP.NET-4.5.html), 2013:
[![Architecture of ASP.NET 4.5, 2013](https://imgur.com/Dizki4E.png)](http://www.dotnet-tricks.com/Tutorial/aspnet/SaJc221013-Understanding-Detailed-Architecture-of-ASP.NET-4.5.html)


Diagram of ASP.NET 5 by [Jouni Heikniemi](http://www.redmond-recap.com/2013/08/22/state-of-asp-net-part-2-one-asp-net/), 2013:
[![Architecture of ASP.NET, 2013](https://i.imgur.com/e4Og3Up.png)](http://www.redmond-recap.com/2013/08/22/state-of-asp-net-part-2-one-asp-net/)


In 2008 Rick Strahl [defined](http://www.west-wind.com/presentations/howaspnetworks/howaspnetworks.asp) ASP.NET in the following way:
> __ASP.NET is a sophisticated engine using Managed Code for front to back processing of Web Requests.__ ASP.NET is a request processing engine. It takes an incoming request and passes it through its internal pipeline to an end point where you as a developer can attach code to process that request. This engine is actually completely separated from HTTP or the Web Server.

Building web applications in pure ASP.NET without MVC, Web API or other overhead seems possible but it's certainly not a common case and I didn't find any documents explaining when it's needed and how to achieve it.
So in this article we will assume that at least one of ASP.NET overhead frameworks is used, preferably ASP.NET MVC.

Sources: [asp.net](http://www.asp.net/get-started/websites).

### Processing Models

The main difference between Node.js and ASP.NET frameworks is their processing models.
Node.js dictates asynchronous processing style while ASP.NET offers programmer a choice.
Node.js was build around asynchronous model from ground up while `async` keyword appeared in ASP.NET MVC 4.
Figures below demonstrate differences between synchronous and asynchronous models for a web application.

![Node.js processing model](https://i.imgur.com/ouyPKkf.png)
<!-- Source: https://strongloop.com/wp-content/uploads/2014/01/threading_node.png -->

As shown Node.js uses one thread for handling requests and many threads (actually, not true threads) to provide asynchronous non-blocking IO (e.g., to the database or to other REST server). Fewer threads means fewer memory for stack allocation and more economic usage of the CPU.

![enter image description here](https://imgur.com/C1LQVXz.png)
<!-- Source https://strongloop.com/wp-content/uploads/2014/01/threading_java.png -->

The diagram above shows multi threaded server that may be found, e.g., in Java.
In this model the server spawns new thread for handling each request which sleeps on blocking IO operations consuming CPU and memory resources.

So how exactly does ASP.NET work?
ASP.NET doesn't use one thread but instead uses restricted by number of concurrent requests pool of threads and queues requests to it.
Threads may be terminated on asynchronous operations like in Node.js.
However, ASP.NET processing model is more prone to context switching which implies additional CPU costs.
More than that as ASP.NET and .NET were not designed with asynchronous programming in mind some libraries may still offer no support for it or offer "fake asynchrony", this makes .NET freedom of async choice quite restricted. Though this argument fades with time.

Sources:
[What Makes Node.js Faster Than Java?](https://strongloop.com/strongblog/node-js-is-faster-than-java/)
[Node.js Thesis: IO is Expensive](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/)
[ASP.NET Thread Usage on IIS 7.5, IIS 7.0, and IIS 6.0](http://blogs.msdn.com/b/tmarq/archive/2007/07/21/asp-net-thread-usage-on-iis-7-0-and-6-0.aspx)
[Node.js and Context Switching](http://stackoverflow.com/questions/16707098/node-js-kernel-mode-threading)
[Opinionated Node.js vs. Non-opinionated ASP.NET](http://stackoverflow.com/a/11060092/521957)
[How does Asynchronous Model Work](https://msdn.microsoft.com/en-us/magazine/dn802603.aspx)


### Programming Languages

ASP.NET uses C# as its primary language.
Node.js uses JavaScript and all the languages that can be transpiled to it like CoffeeScript, Microsoft TypeScript and recent EcmaScript2015 (aka ES6).

Without doubt C# is a more powerful language than JavaScript.
C# offers strict type system and compile-time error checks and in JavaScript you may get it through `Facebook Flow` static type checker or Microsoft TypeScript.
C# has classical inheritance model, EcmaScript6 classes offer new syntax for _the same_ prototypical inheritance (which has its [benefits and quirks](http://stackoverflow.com/a/16872315/521957) over classical).

However some developers are in fear of .NET software patent system, e.g.:

- [Why free software shouldn't depend on Mono or C#, Richard Stallman](https://www.fsf.org/news/dont-depend-on-mono)
- [Comparing Java to .Net](http://en.swpat.org/wiki/Comparing_Java_to_.Net_and_C-sharp)
- [Microsoft's Empty Promise](https://www.fsf.org/news/2009-07-mscp-mono)

I don't see any threat from JavaScript software patents.

JavaScript is a more ubiquitous language though to master Node.js the developer is also required to be acquainted with asynchronous programming style which is harder than in C# (UPD: harder? subjective claim, no evidence).

### Support for Asynchronous Programming

Both, C# and JavaScript support asynchronous programming.
C# exerts `async` and `await` keywords.
As a pioneer Node.js proposed several approaches to asynchronous programming:

- Using callbacks. This way your code becomes hard to read, and control flow is hardened. See Node.js Pyramid of Doom or [Callback Hell](http://callbackhell.com) for examples. This approach appeared the first.
- `yield` keyword, co-routines, generators and Promises eliminate your code from deep nested callbacks and makes it easier to read. This approach is demonstrated by Koa.js web framework.
- `await` and `async` keywords are part of experimental EcmaScript7 standard and may be used today with transpilers like Babel. This syntax constructs make your code more clear for those not introduced to generators.

So, C# asynchronous model is more clear.
Node.js is slightly different though:

1. It compels you to write your code in asynchronous manner, so most libraries support asynchronous model.
2. It implies fewer context switches as stated by some sources.

##### `yield` Example, Koa.js,

```javascript
var koa = require('koa');
var app = koa();

// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
  this.body = 'Welcome to Koa.js!';
});

app.listen(3000);

```
#### Examples: `if-else` Asynchronous Flow
The following set of examples demonstrates `if-else` control flow implemented in asynchronous manner. The purpose of these examples is to get the feeling of asynchronous programming models in Node.js.

The desired flow is the following:
```javascript
if( isAuthenticatedAsync() ) {
  return 'Success, you are authenticated';
} else {
  return 'Failure, you are not authenticated.'
}
```
##### `if-else` Example, Express.js
First approach, keep state in object passable between callbacks.
Example inspired by Express.js and Passport.js.
```javascript
jsonRouter.route('/login')
  .get(
    authenticateMiddleware,
    function loginMiddleware(req, res, next) {
        if (!req.isAuthenticated())
            return res.json('Failure, you are not authenticated.');
        return res.json('Success, you are authenticated');
    }
```
`authenticateMiddleware` keeps its state somewhere in `req` object and checks it with `req.isAuthenticated` method.

##### `if-else` Example, Koa.js

The same approach, but with Koa.js, the state is kept in `this` context object.
```javascript
/* Warning!
   Don't copy this code!
   It may be not idiomatic as it is written by non-experienced programmer.
*/
var koa = require('koa');
var app = koa();

function *isAuthenticated(next) {
  this.isAuthenticated = true;
  return yield next;
}

app.use(isAuthenticated);

app.use(function *(){
  if (!this.isAuthenticated)
    return this.body = 'Failure, you are not authenticated.';
  return this.body = 'Success, you are authenticated'
});
```
Second approach, throw exception and process it in the next middleware.
Excerpt from Koa.js [examples](https://github.com/koajs/examples/blob/master/base-auth/app.js), middleware `auth` throws exception if the user is not authenticated:
```javascript
var koa = require('koa');
var auth = require('koa-basic-auth');
var app = module.exports = koa();

// custom 401 handling

app.use(function* (next){
  try {
    yield* next;
  } catch (err) {
    if (401 == err.status) {
      this.status = 401;
      this.body = 'cant haz that';
    } else {
      throw err;
    }
  }
});

// require auth

app.use(auth({ name: 'tj', pass: 'tobi' }));

// secret response

app.use(function* (){
  this.body = 'secret';
});
```

#### Examples: Asynchronous Calls to HackerNews JSON API

In these examples we will compare different asynchronous models of Node.js and ASP.NET applied to one given task.

##### Task Description

Popular [HackerNews site](news.ycombinator.com) has a [json api](https://github.com/HackerNews/API).
Shortly, it works in the following way:
```sh
GET https://hacker-news.firebaseio.com/v0/topstories.json
-> responds with an array of items like [10023413,10022014...]
GET https://hacker-news.firebaseio.com/v0/item/10023413.json
-> responds with something like:
```
```json
{
  "by": "steveklabnik",
  "descendants": 2,
  "id": 10023413,
  "kids": [
    10023645
  ],
  "score": 81,
  "text": "",
  "time": 1438965545,
  "title": "Announcing Rust 1.2",
  "type": "story",
  "url": "http://blog.rust-lang.org/2015/08/06/Rust-1.2.html"
}
```
The task is to retrieve top story title from HN API.

##### HN JSON API, ASP.NET 5 Beta

Here is how it may be done in ASP.NET 5 Beta.
Project structure:
```sh
.
├── Dockerfile
├── HelloWeb.xproj
├── project.json
├── Properties
│   └── launchSettings.json
├── Startup.cs
└── wwwroot
```
```csharp
// Startup.cs, ASP.NET 5 Beta, 54 lines
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.Logging;
using System.Net.Http;
using System.Net.Http.Headers;
using System;

namespace HelloWeb
{
  public class Startup
  {

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
      var logger = loggerFactory.AddConsole().CreateLogger(this.GetType().Name);
      logger.LogInformation("Configuring...");

      app.Run(async (context) => {
        var path = context.Request.Path;
        logger.LogInformation("Has request for "+path+"!");
        if (!path.Equals("/"))
          return;

        using (var client = new HttpClient())
        {
          client.BaseAddress = new Uri("https://hacker-news.firebaseio.com");
          client.DefaultRequestHeaders.Accept.Clear();
          client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

          HttpResponseMessage response = await client.GetAsync("/v0/topstories.json?print=pretty");
          logger.LogInformation("Got first response.");
          if (response.IsSuccessStatusCode)
          {
            var arr = await response.Content.ReadAsAsync<dynamic>();
            var responseId = (String) arr[0];
            var itemUrl = String.Format("/v0/item/{0}.json?print=pretty", responseId);
            response = await client.GetAsync(itemUrl);
            logger.LogInformation("Got second response.");
            if (response.IsSuccessStatusCode)
            {
              var dict = await response.Content.ReadAsAsync<dynamic>();
              var title = (String) dict["title"];
              logger.LogInformation(title);
              await context.Response.WriteAsync(title);
              return;
            }
          }
          logger.LogInformation("Error:" + await response.Content.ReadAsStringAsync());
          await context.Response.WriteAsync("Service is not available!");
        }
      });
    }
  }
}
```
The development may be carried out in any text editor, terminal or Visual Studio, without IIS as an option.

##### HN JSON API, ASP.NET 4.5/Katana

Now the same trick but with ASP.NET 4.5 and Katana.
Project structure:
```sh
.
├── HelloWorld.csproj
├── HelloWorld.csproj.user
├── HelloWorld.sln
├── packages.config
├── Properties
│   └── AssemblyInfo.cs
├── Startup.cs
└── Web.config
```
This time all development is done in the latest Visual Studio which runs `nuget restore`, builds project and deploys it on the server.
The code is almost the same:
```csharp
// Startup.cs, ASP.NET 4.5/Katana, 56 lines
using Owin;
using Microsoft.Owin.Logging;
using System.Net.Http;
using System.Net.Http.Headers;
using System;

namespace HelloWorld
{
  public class Startup
  {
    private ILogger logger;

    // Invoked once at startup to configure your application.
    public void Configuration(IAppBuilder app)
    {
      this.logger = app.CreateLogger(this.GetType().Name);
      app.Run(async (context) => {
        logger.WriteInformation("Configuring...");

        var path = context.Request.Path;
        logger.WriteInformation("Has request for " + path + "!");
        if (!path.Value.Equals("/"))
            return;
        logger.WriteInformation("Ok, processing request...");

        using (var client = new HttpClient())
        {
          client.BaseAddress = new Uri("https://hacker-news.firebaseio.com");
          client.DefaultRequestHeaders.Accept.Clear();
          client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

          HttpResponseMessage response = await client.GetAsync("/v0/topstories.json?print=pretty");
          logger.WriteInformation("Got first response.");
          if (response.IsSuccessStatusCode)
          {
            var arr = await response.Content.ReadAsAsync<dynamic>();
            var responseId = (String)arr[0];
            var itemUrl = String.Format("/v0/item/{0}.json?print=pretty", responseId);
            response = await client.GetAsync(itemUrl);
            logger.WriteInformation("Got second response.");
            if (response.IsSuccessStatusCode)
            {
              var dict = await response.Content.ReadAsAsync<dynamic>();
              var title = (String)dict["title"];
              logger.WriteInformation(title);
              await context.Response.WriteAsync(title);
              return;
            }
          }
          logger.WriteInformation("Error:" + await response.Content.ReadAsStringAsync());
          await context.Response.WriteAsync("Service is not available!");
        }
      });
    }
  }
}
```

##### HN JSON API, Bare Node.js

Corresponding bare bone Node.js server script.
Notice the boilerplate code and deep nested callbacks (callback hell).
```javascript
// server.js, bare Node.js
var http = require('http');
var https = require('https');

// Biolerplate code to produce GET requests.
function httpsGet(url, handler, errorHandler) {
  https.get(
    url,
    function(response){
      console.log('Got response, receiving body by chunks.');
      response.setEncoding('utf8');
      var data = '';
      response.on(
        'data',
        function (chunk) {
          data += chunk;
        }
      );
      response.on(
        'end',
        function() {
          console.log('Body received, calling handler.');
          if (200 <= response.statusCode && response.statusCode < 400)
            return handler(data);
          return errorHandler(data);
        }
      );
    }
  ).on('error', errorHandler);
}

var server = http.createServer(
  function (req, res) {
    console.log('Has request!');
    var baseAddress = 'https://hacker-news.firebaseio.com';
    function errorHandler(e) {
      console.log('Error:'+e);
      return res.end('Service is not available!');
    }
    httpsGet(
      baseAddress+'/v0/topstories.json?print=pretty',
      function(data) {
        console.log(data);
        var arr = JSON.parse(data);
        var responseId = arr[0];
        var itemUrl = '/v0/item/'+ responseId +'.json?print=pretty';
        httpsGet(
          baseAddress + itemUrl,
          function(data) {
            var obj = JSON.parse(data);
            var title = obj['title'];
            res.end(title);
          },
          errorHandler
        );
      },
      errorHandler
    );
  }
);

var port = 5001;
server.listen(port);
console.log('Server running at http://localhost:'+port);
```

##### HN JSON API, Node.js/co@tj

To get rid of [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) you can use either [request](https://github.com/request/request) or visionmedia [superagent](https://github.com/visionmedia/superagent).
To counter callback hell let's use `co@tj` library.
After all these corrections:
```javascript
// server.js, Node.js and co@tj, 40 lines
// To run: `node --harmony server.js`
var http = require('http');

var request = require('superagent');
var co = require('co');

var server = http.createServer(
  function (req, res) {
    console.log('Has request for '+req.url+'!');
    if (req.url !== '/')
      return res.end();

    co(function *() {
      var baseAddress = 'https://hacker-news.firebaseio.com';
      var topUrl = baseAddress+'/v0/topstories.json?print=pretty';
      var httpRes = yield request.get(topUrl);
      console.log('Got first response.');
      if (httpRes.ok) {
        var arr = httpRes.body;
        var responseId = arr[0];
        var itemUrl = '/v0/item/'+ responseId +'.json?print=pretty';
        var httpRes = yield request.get(baseAddress + itemUrl);
        console.log('Got second response.');
        if (httpRes.ok) {
          var obj = httpRes.body;
          var title = obj['title'];
          return res.end(title);
        }
      }
    }).catch(
      function (err) {
        console.log('Error:'+e);
        return res.end('Service is not available!');
      }
    );
  }
);

var port = 5001;
server.listen(port);
console.log('Server running at http://localhost:'+port);
```

### Simplicity

To assess simplicity let's consider hello world examples of Node.js, ASP.NET 5 Beta and ASP.NET 4.5/Katana.

#### HelloWorld Examples

Commands used to run Node.js samples are quite obvious:
```sh
cd hello-nodejs
npm install
node server.js
```

##### HelloWorld, Express.js

Node.js project file structure:
```sh
.
├── server.js
└── package.json
```

Node.js, Express.js
```javascript
// server.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000); // Deploy a server on port 3000.
```
Two files for project and native server coming within Node.js.
Can't be simpler.

##### HelloWorld, Koa.js

```javascript
// server.js
var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello World!';
});

app.listen(3000); // Deploy a server on port 3000.
```
Generators as a way to counter callback hell, more tricky.
Things get more complicated with `yields`, Promises and `co@tj` in real world, recall HN API example.

##### HelloWorld, ASP.NET 5 Beta

Now let's look at some corresponding examples for ASP.NET 5 Beta.

All examples are taken from https://github.com/aspnet/home and _modified_ for comparison.

"HelloWeb" sample, ASP.NET project file structure:
```sh
.
├── Dockerfile
├── HelloWeb.xproj
├── project.json
├── Properties
│   └── launchSettings.json
├── Startup.cs
└── wwwroot
```
The main file:
```csharp
// Startup.cs
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.Logging;

namespace HelloWeb
{
  public class Startup
  {
    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
      loggerFactory.AddConsole();
      app.Run(async (context) => {
        await context.Response.WriteAsync("Hello World!");
      });
    }
  }
}
```

Commands I've used to run HelloWeb sample.
```sh
cd hn-api-asp.net-vnext
dnvm upgrade -u
dnu restore
dnx . web
```
Almost as easy as with Node.js.

##### HelloWorld, ASP.NET 4.5/Katana

Project structure:
```sh
.
├── HelloWorld.csproj
├── HelloWorld.sln
├── packages.config
├── Properties
│   └── AssemblyInfo.cs
├── Startup.cs
└── Web.config
```
Code:
```csharp
// Startup.cs
using Owin;

namespace HelloWorld
{
  public class Startup
  {
    // Invoked once at startup to configure your application.
    public void Configuration(IAppBuilder app)
    {
      app.Run(async (context) => {
	    await context.Response.WriteAsync("Hello World!");
      });
    }
  }
}
```
Almost the same but to run this code you will need Visual Studio with some web server.
Installing (restoring) and building from terminal is possible, deploying is tricky.

##### HelloWorld, ASP.NET 4.5 Web API 2

For more examples of ASP.NET 4.5 you may consider Web API 2 in `Code/hello-world-asp.net-web-api-2` folder. Developing for ASP.NET 4.5 is harder because you depend on Visual Studio/NuGet which don't always work perfectly (e.g., NuGet may fail to resolve dependencies).

#### Simplicity Summary

| JS/Node.js  									| C#/ASP.NET 4.5 				| C#/ASP.NET 5 Beta
|:------   											|:------- 						   	|:-------
| Need to fight with callback hell	| Need to fight with GUI and abstractions 	| The simplest


### Learnability

Learnability is defined by how easy it is for a newcomer to pick up the language.
Being dynamically typed, JavaScript is easier to pick up, but in Node.js to deliver high-quality code you eventually has to know Promises, generators and co-routines. New syntax sugar of upcoming EcmaScript standards like ES2015 and ES7 adds more ways to express the same meaning making non-recent code less readable for newcomers.

VS -- Visual Studio

| Related Characteristic	| JS/Node.js  			| C#/ASP.NET 4.5 	| C#/ASP.NET 5 Beta
| ----------------					|:------   					|:------- 									|:-------
| DevTools		       			| +, any editor, terminal 	|--, VS, less flexible GUI| +, terminal or VS
| Deploying server			| Easy						| Through GUI, less flexible | Easy
| Async programming		| Tricky						| Easy 									| Easy


### Abstractions and Conventions
##### True for ASP.NET MVC 5/Web API 2 vs Node.js

Node.js is "close to the metal". It offers fewer and thinner abstractions.
So you don't have to configure their overwhelming number of parameters, but instead you are faced with writing the code out of multitude small components.
This approach gives you flexibility of tailoring the code up to the solution.
It may be expected that in place of configuration the programmer is supposed to write much more boilerplate code.
It's not the case with Node.js as it offers all needed facilities from native or third party libraries at the same time not compelling you to use bloated abstractions.
Node.js programmer is free in choice of programming libraries, has a uniform way of combining them as middlewares, may easily divert from MVC in favor of any other architectural pattern and controls options that may be concealed by abstractions in other frameworks.
Node.js imposes only a few conventions: asynchronous programming, most servers and frameworks use middlewares (Express.js, Koa.js).

Like Node.js ASP.NET 5 also proposes middlewares and low-level "close to the metal" control.

But on the other hand ASP.NET MVC 5 or Web API 2 (both ASP.NET 4.5) are quite different.
They offer abstractions but don't imply much configuration or boilerplate code.
Instead they leverage convection other configuration principle.
It means it has conventions which are when followed make your code concise and readable.
E.g. there is a predefined folder structure for every MVC project to follow, naming conventions for controllers, etc.
So, yes, ASP.NET imposes upon you its view of things. The problem is that if you want to divert from conventions then you are deprived of all this automatic out-of-the-box behavior and faced with manual configuration. To simply get rid of or change `Content-Type` in Web API 2 requires much work, relying on third party libraries or writing own `Formatter` class.
Now, the question is whether these conventions are good and apt for your tasks, will they make you happy with your task so you don't have to configure everything from scratch.

Conclusion:
- ASP.NET MVC 5 exerts many conventions with which everything works out of the box, but tailoring code for your needs requires more configuration.
- ASP.NET MVC 5 offers many abstractions which may be great for large applications but seem bloated for simple tasks. Also programmer looses sense of control when everything is automated behind abstractions.
- Node.js and ASP.NET 5 impose very few conventions but offer great flexibility.

### Performance

#### ASP.NET MVC 4/Web API vs Node.js

Certainly there are tasks where ASP.NET outperforms Node.js and there are tasks where ASP.NET looses.
To take advantage of multi core system Node.js must be clustered.
To outperform with IO-expensive tasks ASP.NET must use `async`/`await` keywords.

Here is a chart benchmarking ASP.NET Web API and Node.js for asynchronously reading POST body, 2012, [source](http://mikaelkoskinen.net/post/asp-net-web-api-vs-node-js-benchmark-take-2).

![ASP.NET Web API vs Node.js](https://i.imgur.com/N5k0XiZ.png)
<!-- Source: http://adafyservicesstorage.blob.core.windows.net/mikael/image_76.png -->

Chart below compares performance of Node.js and ASP.NET MVC 4 for asynchronously reading json file from filesystem, 2012, [source](http://rarcher.azurewebsites.net/Post/PostContent/19).

![Node.js vs MVC 4](https://i.imgur.com/NpB1F8B.png)
<!-- Source: http://rarcher.azurewebsites.net/Images/nodeMvc30.png -->

The explanation why asynchronous Node.js is faster than asynchronous ASP.NET may be that it uses fewer context switches.

Node.js is created for fast request handling without heavy computations. In all tasks requiring heavy computations Node.js will certainly loose to ASP.NET.
In cases where Node.js is not clustered or doesn't take advantage of asynchronousity it looses to ASP.NET, e.g. [see this](http://stackoverflow.com/a/10641377/521957).

#### C#/Mono vs Node.js/V8

There are several implementations of `.NET` virtual machine, `Mono` is one of them.
If you want to know which language, `JavaScript` or `C#`, is faster -- you may consider [this comparison](http://kokizzu.blogspot.be/2015/02/numeric-combsort-benchmark-updated.html), where `C#/Mono` outperforms `Node.js/V8` for CombSort sorting algorithm (`2.64s` for `node` and `0.44s` for Mono `mcs`).



### Ecosystem

By ecosystem I mean the availability of third party packages and community support.
As Node.js is more portable, its community is wider. JavaScript is also more ubiquitous than .NET. Also provided with the idea of louse coupling Node.js ecosystem is rich and robust.

### Features Check List
#### Paradigms Support
| Feature    	| JS/Node.js        | C#/ASP.NET
| ------------- |:-----------       |:-----
| Type System	| Weakly typed		| Strongly typed
| Generic	| No need, dynamic	| Yes
| Imperative	| Yes			| Yes
| Structured 	| Yes			| Yes
| Procedural	| Yes			| Static methods
| Reflective	| Yes			| Yes
| OOP		| Prototype-based 	| Classical
| Functional	| Third party libs	| Partly supported, also F#
| Closures	| Yes			| Yes
| Lambdas	| Yes, [syntax support][syn] in ES6	| Yes, syntax support
| Concurrent	| No, clustered, IPC	| Yes

[syn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

#### Cost

| Aspect    	    		| JS/Node.js        | C#/ASP.NET
| -------------                 |:-----------       |:-----
| Development Environment	| Free/Paid (WebStorm)			| [Freemium][f] (Visual Studio)
| Platform			| Linux preferable (Free/Paid)		| Windows preferable (Paid)
| Hosting			| Free/Paid				| Free/Paid
| Competent developers		| Catches up, also see [1]		| Available according to [1]
| Code maintenance		| more bugs, handle upgrades		| less bugs, handle upgrades

[f]: https://en.wikipedia.org/wiki/Freemium

My choice may be highly subjective but I believe Node.js is cheaper in general.

> [[1]](http://www.haneycodes.net/to-node-js-or-not-to-node-js/) 2014: Relative to .NET, there aren’t as many Node.js developers in the current tech scene that are capable and competent.


#### Readability

\+ means "wins"
\-- means "looses"

| Characteristic    	| JS/Node.js        			| C#/ASP.NET
| -------------         |:-----------           		|:-----
| Easy to abuse		| --					| +
| Consistent async model	| --, cb, Promises, `yield`, `async/await`	| --, mostly `async`/`await`, see [1]
| Verbose (not terse)	| --, not always			| +, mostly
| Not abstract 		| +, "close to metal" 			| --
| Clear project/file structure | + 					| --, only in vNext

In most cases C# wins in readability though its use of abstractions and language features may make your code obscure.

> [[1]](http://stackoverflow.com/a/11060092/521957) It got even harder because .NET ended up with 3-4 different patterns for doing async. .NET 4.5 is trying to go back and retrofit the .NET framework to have an opinionated model around async IO, but it may be a while until the frameworks you care about actually support it.

#### Reliability

Reliability is defined by how robust your program to failures in input, runtime exceptions, programming errors, etc.
C# is more robust as it offers strict-type system which JavaScript lacks.
Things get more complicated when dealing with error handling in asynchronous code. It's more robust to use generators with `yield` wrapped in `try`/`catch` instead of error callbacks in Node.js.
Some programmers are not happy with JavaScript being not robust, e.g. [see this](https://medium.com/@tjholowaychuk/farewell-node-js-4ba9e7f3e52b).

#### Generality

Generality of code is defined by whether it may be applied to vast majority of use cases, e.g., different types of inputs.

| Characteristic    		| JS/Node.js        	| C#/ASP.NET
| -------------                 |:-----------           |:-----
| Variable number of arguments	| Yes			| Yes
| Function/method overloading	| Not needed, dynamic	| Yes
| Omitting arguments/defaults	| Since ES2015/ES6	| Yes
| Calls w/ named arguments	| No, use objects	| Yes
| Mixing order of arguments	| Yes			| No, only named
| Generics			| Not needed, dynamic	| Yes
| Work with any (unpredicted) type | Yes		| Yes, see `dynamic`
| Method overriding		| Yes, dynamic		| Yes
| Monkey patching		| Yes			| No
| One pattern for async code	| No, callbacks, Promises + await or hacky yield | No, modern + legacy
| Everything is ready for async	| Yes			| No

As @RemKolomna commented, the usage of dynamic features of JavaScript hinders V8 from optimizations, making it less performant:

> However, V8 has hidden types created internally for objects at runtime; objects with the same hidden class can then use the same optimized generated code.

> ...operations that accept multiple types will be less performant.

Source: http://www.html5rocks.com/en/tutorials/speed/v8/

Currently Node.js ecosystem is being split between callback and Promises approaches to asynchronous programming making old libraries cumbersome to use but on the other hand ASP.NET is split in addition between synchronous and non-synchronous libraries (which is really not a big problem, in my humble opinion, as most use cases are being covered).

#### Portability

Except some issues Node.js works great on all major platforms.
ASP.NET is ported partially, e.g. MVC 4 on Mono lacks support for async features.
The forthcoming ASP.NET 5 is expected to cover all major platforms.
Definitely, currently Node.js wins in portability.
Sources: [Mono Compatibility](http://www.mono-project.com/docs/about-mono/compatibility/).

#### Orthogonality

Orthogonality is defined by how many programming concepts and their combinations you have to use to reach your goal.
It is related to the language used, to the ecosystem involved and cohesion/coupling.
It seems to me Node.js has looser coupling and that's why it wins in orthogonality.

#### Maintainability

> ...maintainability is inversely proportional to the amount of time it takes a developer to make a change and the risk that change will break something.

| Related Characteristic    	| JS/Node.js        	| C#/ASP.NET
| -------------             	|:-----------       	|:-----
| Readability		  	| Worse			| Better
| Reliability			| Worse, weakly typed	| Better, strongly typed
| Testability			| Easy to mock objects 	| Not always possible to mock

#### Efficiency

Let's put there are Code Efficiency and Programmer Efficiency.
> The goal of code efficiency is to reduce resource consumption and completion time as much as possible with minimum risk to the business or operating environment.

So, Code Efficiency is related to performance that is discussed in a [corresponding chapter](#performance).

We will assume that Programmer Efficiency is defined by how easy it is for the programmer to implement some new feature for a project. I believe the crucial ground for efficiency is ecosystem and subjectively Node.js is better here.

#### Memory Management

[Node.js](https://github.com/nodejs/node-v0.x-archive/wiki/FAQ#what-is-the-memory-limit-on-a-node-process):
> Currently, by default v8 has a memory limit of 512mb on 32-bit systems, and 1gb on 64-bit systems. The limit can be raised by setting --max_old_space_size to a maximum of ~1024 (~1 GiB) (32-bit) and ~1741 (~1.7GiB) (64-bit), but it is recommended that you split your single process into several workers if you are hitting memory limits.

With ASP.NET there are statements that memory management becomes difficult when you reach a 2GB threshold on 64x machine but sources are scarce.

#### Type Checking

JavaScript is weakly typed dynamic language and type checks may be implemented during runtime. C# is a strongly typed language with support for dynamic objects making it competitive with dynamic languages, type checks are conducted during compile time making it more reliable.

#### Concurrency

Node.js uses one CPU thread and to make use of multi threaded platform you have to engage [clustering](https://nodejs.org/api/cluster.html).
ASP.NET/IIS makes use of multiple threads out of the box with Thread Pool.
If you want to spawn new processes and engage concurrent processing then C# is a powerful language for it while in Node.js you have to resort to clustering with IPC again (and don't even ask about synchronization or atomics). Parallel execution in libraries like `co` and `async` are ["about kicking-off I/O tasks in parallel, not about parallel execution of code"](https://github.com/caolan/async#parallel).

### Summary

Definitely Node.js has its advantages over ASP.NET 4.5, that's why it has conquered such popularity. While ASP.NET 5 Beta is promising to catch up it is not production ready yet. All frameworks have its fortes and shortcomings to put up with -- it's a matter of preference which one to choose.
Here is a final table to help you pick the right direction.

Flexibility -- how easy it is to tailor framework to your specific needs.
xP -- Cross Platform

| Characterisitc     		| JS/Node.js  			| C#/ASP.NET 4.5 			| C#/ASP.NET 5 Beta
| ----------------		|:------   			|:------- 				|:-------
| Languages		       	| JS looses 			| __C# wins__				| __C# wins__
| Paradigms			| --				| __Rich__				| __Rich__
| Computational perf.		| --, limited concurrency	| __Wins__   				| __Wins__
| IO performance	   	|  __Wins__			| --					| ??
| Asynchronous programming 	| Required, awkward syntax	| __Supported__ 			| __Supported__
| Portability		     	| __xP__, Linux more reliable 	| Windows for recent 			| __xP__ from the ground up
| Dependability		    	| __Wins__, xP 			| On Win and VS				| __Wins__,xP
| Reliability		     	| Not robust 			| __Wins__				| Not stable yet
| Ecosystem		 	| __Modern and wide__ (xP)	| Robust, NuGet may fail 		| Better but young, (xP)
| Learnability		   	| Easy to start, not mature	| Mature, but abstract			| ??
| Simplicity		     	| Simple, except Promises & quirks	| Server deployment, NuGet 		| __Wins__
| Cost		   		| __Wins__, free 		| [Freemium][f]	, Win, VS 		| Free/Paid, more xP tools
| Flexibility		     	| __Wins__ 	 		| MVC, Web API are hard to tailor 	| ??
| Scalability 		     	| Great for IO load 		| Better for CPU load, mature IO 	| The same, CPU and IO


### Other Materials Used

[To Node.js Or Not To Node.js](http://www.haneycodes.net/to-node-js-or-not-to-node-js/)
[Is Node.js better than ASP.NET?](https://thomasbandt.com/is-nodejs-better-than-aspnet)
[The Node.js Philosophy](http://blog.nodejitsu.com/the-nodejs-philosophy/)


---

## Marginalia

### Principles behind Node.js and C#/ASP.NET/ASP.NET MVC

ASP.NET MVC embraces Single Responsibility Principle and I'm pretty sure it embraces the whole [SOLID](https://en.wikipedia.org/wiki/SOLID) set of principles of OOP.

To quote Eilon Lipton:
> ...each of the components in the MVC framework is fairly small and self contained, with single responsibilities. This means that due to their small size you have building blocks that are easier to understand. It also means that you can replace or even alter the building blocks if they don't suit your needs.


| Characterisitc     							| Node.js  	| ASP.NET
| ----------------   								|:------   	|:-------
| SRP and SoC 									| Yes		 		| SOLID
| Louse Coupling								| Yes		 		| DIP<br/>Dependence on Interfaces
| Extensibility  									| Composition, Middlewares				| Override of Classes<br/>Composition
| Close to Metal 								| Yes		 		| No, mostly abstract

DIP -- Dependency Inversion Principle

> Separation of Concerns (SoC) – is the process of breaking a computer program into distinct features that overlap in functionality as little as possible. A concern is any piece of interest or focus in a program. Typically, concerns are synonymous with features or behaviors.
http://en.wikipedia.org/wiki/Separation_of_concerns

> Single Responsibility Principle (SRP) – every object should have a single responsibility, and that all its services should be narrowly aligned with that responsibility. On some level Cohesion is considered as synonym for SRP.
http://en.wikipedia.org/wiki/Single_responsibility_principle

Sources:
[ASP.NET MVC Design Philosophy, Eilon Lipton, 2007](https://web.archive.org/web/20150627050706/http://weblogs.asp.net/leftslipper/asp-net-mvc-design-philosophy)
[The Node.js Philosophy](http://blog.nodejitsu.com/the-nodejs-philosophy/)

-------------------
[Shortened link](https://git.io/vaNnI) | [Github's Gists LACK COMMENT NOTIFICATIONS](https://github.com/isaacs/github/issues/21)