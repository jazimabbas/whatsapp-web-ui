import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import GlobalStyle from "global-styles";
import AppThemeProvider from "common/theme";
import { MainPageLoader } from "common/components/loader";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppThemeProvider>
    <GlobalStyle />
    <Suspense fallback={<MainPageLoader />}>
      <App />
    </Suspense>
  </AppThemeProvider>
);
