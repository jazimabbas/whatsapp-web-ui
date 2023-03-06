import React from "react";
import useAppLoad from "pages/splash/hooks/useAppLoad";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const ChatPage = React.lazy(() => import("pages/chat"));
const SplashPage = React.lazy(() => import("pages/splash"));

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<ChatPage />} />)
);

export default function App() {
  const { isLoaded, progress } = useAppLoad();

  if (!isLoaded) return <SplashPage progress={progress} />;
  return <RouterProvider router={router} />;
}
