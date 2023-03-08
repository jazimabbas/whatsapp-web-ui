import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "App";
import { lightTheme } from "common/theme";
import { MainPageLoader } from "common/components/loader";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Suspense fallback={<MainPageLoader />}>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </Suspense>
);
