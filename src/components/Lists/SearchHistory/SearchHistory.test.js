import React from 'react';
import ReactDOM from 'react-dom';
import SearchHistory from './SearchHistoryList';

describe('SearchHistory Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchHistory /> , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})