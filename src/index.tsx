import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "App";
import AppThemeProvider from "common/theme";
import { MainPageLoader } from "common/components/loader";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppThemeProvider>
    <Suspense fallback={<MainPageLoader />}>
      <App />
    </Suspense>
  </AppThemeProvider>
);
