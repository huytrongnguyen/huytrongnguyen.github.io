Let take a look on React documentation about State and Lifecycle: [https://facebook.github.io/react/docs/state-and-lifecycle.html](https://facebook.github.io/react/docs/state-and-lifecycle.html). The keyword of this topic is:

> Because ```this.props``` and ```this.state``` may be updated asynchronously, you should not rely on their values for calculating the next state.

It means this code may fail to update the counter:

```javascript
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

```javascript
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```

Passing in a function into ```setState``` instead of an object will give you a reliable value for your component’s ```state``` and ```props```.