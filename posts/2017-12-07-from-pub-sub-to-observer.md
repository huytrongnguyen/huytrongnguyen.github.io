# From Pub-Sub pattern to Observer pattern

## What is the difference between Observer pattern and Pub-Sub pattern?

There are two major differences between Observer pattern and Pub-Sub pattern:

  * Observer pattern is mostly implemented in a synchronous way, i.e. the observable calls the appropriate method of all its observers when some event occurs. The Pub-Sub pattern is mostly implemented in an asynchronous way (using message queue).
  * In the Observer pattern, the observers are aware of the observable. But, in Pub-Sub pattern, publishers and subscribers don't need to know each other. They simply communicate with the help of message queues.

![Schematical](https://habrastorage.org/files/39b/7f9/806/39b7f98064b5458e9e2837cca15e3525.jpg)

With the explanation above, that means in Pub-Sub pattern we focus on publish/subscribe action while in Observer pattern we should focus on publisher and subscriber.

## Pub-Sub pattern

We can simple implement Pub-Sub pattern like this:

```js
class PubSub {
  constructor() {
    this.handlers = [];
  }

  subscribe(event, handler, context) {
    if (typeof context === 'undefined') { context = handler; }
    this.handlers.push({ event: event, handler: handler.bind(context) });
  }

  publish(event, args) {
    this.handlers.forEach(topic => {
      if (topic.event === event) {
        topic.handler(args)
      }
    })
  }
}

export default new PubSub();
```

Imagine we build a wishlist component, then we will implement a subscribe function:

```js
PubSub.subscribe('addToWishlist', (product) => {
  const { store } = this.state;
  store.push(product);
  this.setState({ store });
});
```

Whenever user click on 'Add to wishlist' button, we can add current product into wishlist by calling:

```js
PubSub.publish('addToWishlist', product);
```

## Observer pattern

There are two main strategies for observer pattern:

  * **Push** behaviour - when an event happens Observable object will notify all Observers by sending all the new data to them
  * **Pull** behaviour - when an event happens Observable object will notify all Observers and each Observer will pull the information it needs from the Observable

The most popular library for Observer pattern is RxJS with those concepts:

  * **Observable**: represents the idea of an invokable collection of future values or events.
  * **Observer**: is a collection of callbacks that knows how to listen to values delivered by the Observable.
  * **Subscription**: represents the execution of an Observable, is primarily useful for cancelling the execution.
  * **Operators**: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, flatMap, etc.
  * **Subject**: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
  * **Schedulers**: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

Instead of:

```js
const button = document.querySelector('button');
button.addEventListener('click', () => console.log('Clicked!'));
```

With RxJS, we can do:

```js
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click').subscribe(() => console.log('Clicked!'));
```

A little bit different but in this example you can see:

  * Rx.Observable.fromEvent(button, ‘click’) is the interface that listens for button click events (**Observable**).
  * A callback function receives notification of the click event and logs Clicked! to the console (**Observer**).
  * We call our Observable, passing it the Observer callback (**Subscription**).

## Anatomy of an Observable

### Creating Observables

Observables can be created with creation operators:

  * From multiple values: `const observable = Rx.Observable.of('foo', 'bar');`
  * From an array: `const observable = Rx.Observable.from([1,2,3]);`
  * From an event: `const observable = Rx.Observable.fromEvent(document.querySelector('button'), 'click');`
  * From a promise: `const observable = Rx.Observable.fromPromise(fetch('/users'));`
  * From a function: `const observable = Rx.Observable.create(observer => observer.next('hi'));`

### Subscribing to Observables

Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to.

```js
observable.subscribe(
  value => console.log(`Observer got a next value: ${value}`),
  err => console.error(`Observer got an error: ${err}`),
  () => console.log('Observer got a complete notification')
);
```

### Disposing Observable Executions

When you subscribe, you get back a Subscription, which represents the ongoing execution. Just call unsubscribe() to cancel the execution.

```js
var observable = Rx.Observable.from([10, 20, 30]);
var subscription = observable.subscribe(x => console.log(x));
// Later:
subscription.unsubscribe();
```

## Subject

A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners. It looks like a Pub-Sub pattern but not the same:

  * When Subject is an Observable

```js
var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(1);
subject.next(2);
```

  * When Subject is an Observer

```js
var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

var observable = Rx.Observable.from([1, 2, 3]);

observable.subscribe(subject); // You can subscribe providing a Subject
```

## Operators

An Operator is a function which creates a new Observable based on the current Observable. This is a pure operation: the previous Observable stays unmodified.

```js
function multiplyByTen(input) {
  var output = Rx.Observable.create(function subscribe(observer) {
    input.subscribe({
      next: (v) => observer.next(10 * v),
      error: (err) => observer.error(err),
      complete: () => observer.complete()
    });
  });
  return output;
}

var input = Rx.Observable.from([1, 2, 3, 4]);
var output = multiplyByTen(input);
output.subscribe(x => console.log(x));
```