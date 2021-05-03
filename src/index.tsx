import * as React from 'react';
import {
  startReportingRuntimeErrors,
  stopReportingRuntimeErrors,
} from 'react-error-overlay';

type ErrorBoundary = {
  children: any;
  onError?: () => void;
};

export default function ErrorBoundary(props: ErrorBoundary) {
  React.useEffect(() => {
    startReportingRuntimeErrors({ onError: props.onError });
    return () => {
      stopReportingRuntimeErrors();
    };
  }, []);
  return <>{props.children}</>;
}
