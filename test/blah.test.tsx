import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ErrorBoundary from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorBoundary>child</ErrorBoundary>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
