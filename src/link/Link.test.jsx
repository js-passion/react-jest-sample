/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

describe('<CheckboxWithLabel />', () => {
  test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Link>Facebook</Link>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
