import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ErrorBoundary from '../.';

const App = () => {
  return (
    <>
      <button
        onClick={() => {
          throw new Error('a');
        }}
      >
        Throw Error
      </button>
      {a}
    </>
  );
};

ReactDOM.render(
  <ErrorBoundary onError={() => alert('no')}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
