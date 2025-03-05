Stateless Functional Components are  the functions that render components where the syntax is simpler. There are neither class definitions nor constructors. For example:

```js
const Welcome = ({ name }) => <h1>Hello, {name}!</h1>;
```

Higher Order Components (HOC) are functions that create a new component by wrapping another component (or components), encapsulating the wrapped components. I could make an abstraction that allows us to define this logic in a single place and share them across many components. For example:

```js
function higherOrderComponent(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

const dataSource = [];

const EnhancedComponent = higherOrderComponent(WrappedComponent, dataSource);
```

An HOC is a pure function with zero side-effects. It doesn't modify the input component. It **composes** the original component by **wrapping** it in a container component.

And that's it! The HOC isn't concerned with how or why the data is used, and the wrapped component isn't concerned with where the data came from.

The Facebook documentation is [https://facebook.github.io/react/docs/higher-order-components.html](here)