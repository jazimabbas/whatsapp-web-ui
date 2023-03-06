import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ChatProvider from "pages/chat/context/chat";
const ChatPage = React.lazy(() => import("pages/chat"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ChatProvider>
          <ChatPage />
        </ChatProvider>
      }
    />
  )
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
