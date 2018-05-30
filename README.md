![Travis](https://travis-ci.org/rubixibuc/multi-compose.svg?branch=master)

# multi-compose

```jsx harmony
import React from 'react';
import { withState } from 'recompose';
import { connect } from 'react-redux';
import multiCompose from 'multi-compose';

const multiComponent = multiCompose(
  withState('getter', 'setter'),
  // additional HOCS
  // these will be the same across all instances
)(
  {
    instance1: [
      connect(/** connect component */)
      // additional HOCS
    ],
    instance2: [
      connect(/** connect component */)
      // additional HOCS
    ]
    // additional instances
  },
  true // true if instance HOCS should be composed first
)((props) => (<div/>));

// created two differently connected components 
// with everything else the same

const connectedComponent1 = multiComponent.instance1;
const connectedComponent2 = multiComponent.instance2;
```
