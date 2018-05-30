import React from 'react';
import multiCompose from './index';
import { shallow, mount } from 'enzyme';
import { withProps } from 'recompose';

describe('multi-compose', () => {
  it('should create two left instances of a shared composed component', () => {
    const MultiComponent = multiCompose(
      withProps({
        sharedProp1: 'sharedProp1'
      }),
      withProps({
        sharedProp2: 'sharedProp2'
      })
    )(
      {
        Instance1: [
          withProps({
            instanceProp: 'instanceProp1'
          })
        ],
        Instance2: [
          withProps({
            instanceProp: 'instanceProp2'
          })
        ]
      },
      true
    )(
      ({ sharedProp1, sharedProp2, instanceProp }) =>
        `${sharedProp1}${sharedProp2}${instanceProp}`
    );

    expect(MultiComponent.Instance1).toBeDefined();
    expect(MultiComponent.Instance2).toBeDefined();

    const Component1 = mount(<MultiComponent.Instance1 />);
    const Component2 = mount(<MultiComponent.Instance2 />);

    expect(Component1).toMatchSnapshot();
    expect(Component2).toMatchSnapshot();
  });
});
