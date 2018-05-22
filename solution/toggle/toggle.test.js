import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './toggle.js';
import ReactTestUtils from 'react-dom/test-utils';

test('The toggle toggles when clicked', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Toggle>just clicked</Toggle>, root);
  const buttonNode = root.querySelector('button');
  const childrenNode = root.lastChild;
  ReactTestUtils.Simulate.click(buttonNode);
  expect(childrenNode.textContent).toEqual('just clicked');
});