import { ErrorBoundary } from "react-error-boundary";

import ThemedRadixUIProvider from "./theme/ThemedRadixUIProvider";
import Router from "./router/Router";
import ErrorScreen from "./components/pages/ErrorPage";

function App() {
  return (
    <ThemedRadixUIProvider>
      <ErrorBoundary FallbackComponent={ErrorScreen}>
        <Router />
      </ErrorBoundary>
    </ThemedRadixUIProvider>
  );
}

export default App;
