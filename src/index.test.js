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
            instanceProp1: 'instance1Prop1'
          }),
          withProps({
            instanceProp2: 'instance1Prop2'
          })
        ],
        Instance2: [
          withProps({
            instanceProp1: 'instance2Prop1'
          }),
          withProps({
            instanceProp2: 'instance2Prop2'
          })
        ]
      },
      true
    )(
      ({ sharedProp1, sharedProp2, instanceProp1, instanceProp2 }) =>
        `${sharedProp1} ${sharedProp2} ${instanceProp1} ${instanceProp2}`
    );

    expect(MultiComponent.Instance1).toBeDefined();
    expect(MultiComponent.Instance2).toBeDefined();

    const Component1 = mount(<MultiComponent.Instance1 />);
    const Component2 = mount(<MultiComponent.Instance2 />);

    expect(Component1).toMatchSnapshot();
    expect(Component2).toMatchSnapshot();
  });

  it('should create two right instances of a shared composed component', () => {
    const MultiComponent = multiCompose(
      withProps({
        sharedProp1: 'sharedProp1'
      }),
      withProps({
        sharedProp2: 'sharedProp2'
      })
    )({
      Instance1: [
        withProps({
          instanceProp1: 'instance1Prop1'
        }),
        withProps({
          instanceProp2: 'instance1Prop2'
        })
      ],
      Instance2: [
        withProps({
          instanceProp1: 'instance2Prop1'
        }),
        withProps({
          instanceProp2: 'instance2Prop2'
        })
      ]
    })(
      ({ sharedProp1, sharedProp2, instanceProp1, instanceProp2 }) =>
        `${sharedProp1} ${sharedProp2} ${instanceProp1} ${instanceProp2}`
    );

    expect(MultiComponent.Instance1).toBeDefined();
    expect(MultiComponent.Instance2).toBeDefined();

    const Component1 = mount(<MultiComponent.Instance1 />);
    const Component2 = mount(<MultiComponent.Instance2 />);

    expect(Component1).toMatchSnapshot();
    expect(Component2).toMatchSnapshot();
  });
});
