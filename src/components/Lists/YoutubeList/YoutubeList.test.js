import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeList from './YoutubeList';

describe('YoutubeList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<YoutubeList /> , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})