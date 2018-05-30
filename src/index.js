import { compose } from 'recompose';
import _ from 'lodash';

export default (...sharedHocs) => (instanceMap, left) => Component =>
  _.mapValues(
    instanceMap,
    instanceHocs =>
      left
        ? compose(...instanceHocs, ...sharedHocs)(Component)
        : compose(...sharedHocs, ...instanceHocs)(Component)
  );
