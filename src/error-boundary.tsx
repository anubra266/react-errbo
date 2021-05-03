import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false,
  };
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }
  render() {
    const { hasError, errorInfo, error }: any = this.state;
    if (hasError) {
      return (
        <div
          style={{
            background: '#383838',
            padding: '15px',
            borderRadius: '5px',
            display: 'none',
          }}
        >
          <h1 style={{ color: '#FB2C45' }}> Error: {error.message} </h1>
          <span style={{ color: '#fff' }}>Error occured in: </span>
          <div
            style={{
              background: '#4A3738',
              marginTop: '10px',
              marginBottom: '10px',
              padding: '10px',
              color: '#B591BA',
            }}
          >
            {errorInfo && errorInfo.componentStack.toString()}{' '}
          </div>
          <span
            style={{ cursor: 'pointer', color: '#0077FF' }}
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload this page
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}
