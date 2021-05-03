import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ErrorBoundary from '../.';

const App = () => {
  return (
    <ErrorBoundary onError={() => alert('no')}>
      <button
        onClick={() => {
          throw new Error('a');
        }}
      >
        Throw Error
      </button>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
