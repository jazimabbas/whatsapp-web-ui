import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ChatPage from "pages/chat";
import SplashPage from "pages/splash";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <SplashPage />
  </React.StrictMode>
);
