import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';

describe('LoginPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})