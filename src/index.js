import { compose } from 'recompose';
import _ from 'lodash';

export default (...sharedHocs) => (
    instanceMap,
    left
) => component =>
    _.mapValues(
        instanceMap,
        instanceHocs =>
            left
                ? compose(...instanceHocs, ...sharedHocs)(component)
                : compose(...sharedHocs, ...instanceHocs)(component)
    );
