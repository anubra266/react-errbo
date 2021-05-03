import * as React from 'react';
import {
  startReportingRuntimeErrors,
  stopReportingRuntimeErrors,
} from 'react-error-overlay';
import ErrorBoundary from './error-boundary';

type ErrorBo = {
  children: any;
  onError?: () => void;
};

export default function ErrorBo(props: ErrorBo) {
  React.useEffect(() => {
    startReportingRuntimeErrors({ onError: props.onError });
    return () => {
      stopReportingRuntimeErrors();
    };
  }, []);
  return <ErrorBoundary>{props.children}</ErrorBoundary>;
}
