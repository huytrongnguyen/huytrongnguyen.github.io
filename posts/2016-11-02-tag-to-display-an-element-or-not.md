Based on ngIf from angular, I implement If tag in react.

The If tag removes or recreates a portion of the DOM tree based on an {expression}.

If the expression assigned to ngIf evaluates to a false value then the element is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.

```js
import React, { Component } from 'react'

export class If extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cond, ...others } = this.props
    if (!cond) {
      return null
    }
    return <div { ...others }>
      {this.props.children}
    </div>
  }
}
```

###### Usage

```html
<If cond={expression}>
  <Any />
</If>
```