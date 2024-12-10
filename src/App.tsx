import { Theme } from "@radix-ui/themes";
import { ErrorBoundary } from "react-error-boundary";

import Router from "./router/Router";
import ErrorScreen from "./components/pages/ErrorPage";

function App() {
  return (
    <Theme>
      <ErrorBoundary FallbackComponent={ErrorScreen}>
        <Router />
      </ErrorBoundary>
    </Theme>
  );
}

export default App;
