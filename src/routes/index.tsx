import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const ChatPage = React.lazy(() => import("pages/chat"));

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<ChatPage />} />)
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
