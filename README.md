# multi-compose

```jsx harmony
import React from 'react';
import {withState} from 'recompose'
import { withState } from 'recompose';
import { connect } from 'react-redux';
import multiCompose from 'multi-compose';

const multiComponent = multiCompose(
  withState('getter', 'setter'),
  // any hoc can go here
  // these will be the same across all instances
)(
  {
    instance1: [
      connect(/** connect component */)
    ],
    instance2: [
      connect(/** connect component */)
    ]
    // any hoc can go here
    // each will belong to a single instance
  },
  true
)((props) => (<div/>));

// created to differently connected components 
// with everything else the same

const connectedComponent1 = multiComponent.instance1;
const connectedComponent2 = multiComponent.instance2;
```
