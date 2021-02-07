# react-errbo

> React Error Boundary Package

[![NPM](https://img.shields.io/npm/v/react-errbo.svg)](https://www.npmjs.com/package/react-errbo) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-errbo
```

## Usage

```jsx
import React, { Component } from 'react'

import ErrorBoundary from 'react-errbo'

class Example extends Component {
  render() {
    return (
      <ErrorBoundary >
        {undefinedVariable} 
      </ErrorBoundary>
    )
  }
}
```

## License

MIT © [anubra266](https://github.com/anubra266)
