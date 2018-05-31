[![Build Status](https://travis-ci.org/rubixibuc/multi-compose.svg?branch=master)](https://travis-ci.org/rubixibuc/multi-compose) [![Coverage Status](https://coveralls.io/repos/github/rubixibuc/multi-compose/badge.svg)](https://coveralls.io/github/rubixibuc/multi-compose)

# multi-compose

Creates multi-instance components. 
Enables a single component to have multiple views. 
Useful when two components share most functionality and are closely related.

## Getting Started

### Installing

```text
npm i multi-compose
```

### Usage

#### MyComponent.js

```jsx harmony
import React from 'react';
import { withState } from 'recompose';
import { connect } from 'react-redux';
import multiCompose from 'multi-compose';

export default multiCompose(
  withState('getter', 'setter'),
  // ...
)(
  {
    Instance1: [
      connect(state => ({prop: state.prop1})) // state.prop1 = 'a'
      // ...
      
    ],
    Instance2: [
      connect(state => ({prop: state.prop2})) // state.prop1 = 'b'
      // ...
    ]
    // ...
  },
  true // true if instance HOCs should be composed first
)(({prop}) => (<div>{prop}</div>));
```

#### Instance1.js

```jsx harmony
import React from 'react';
import MyComponent from './MyComponent'

export default () => <MyComponent.Instance1/> // renders <div>a</div>
```

#### Instance2.js

```jsx harmony
import React from 'react';
import MyComponent from './MyComponent'

export default () => <MyComponent.Instance2/> // renders <div>b</div>
```