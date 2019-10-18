import React from 'react';
import ReactDOM from 'react-dom';
import DocsList from './DocsList';

describe('DocsList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DocsList /> , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})