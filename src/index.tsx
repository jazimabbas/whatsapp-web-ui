import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "App";
import { MainPageLoader } from "common/components/loader";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<MainPageLoader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
