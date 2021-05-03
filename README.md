# react-errbo

React Error Boundary Package

## Badges

[![NPM](https://img.shields.io/npm/v/react-errbo.svg)](https://www.npmjs.com/package/react-errbo) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

Install react-errbo with npm

```bash
  npm install --save-dev react-errbo
  #or
  yarn add -D react-errbo
```

## Demo

Insert gif or link to demo

## Usage/Examples

```javascript
import ErrorBoundary from 'react-errbo';

const App = () => {
  return (
    <ErrorBoundary onError={() => alert('An error occured')}>
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
```
