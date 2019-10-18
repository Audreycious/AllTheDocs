import React from 'react';
import ReactDOM from 'react-dom';
import StackOverflow from './StackOverflowList';

describe('StackOverflow Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StackOverflow /> , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})