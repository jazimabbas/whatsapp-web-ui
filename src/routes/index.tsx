import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChatProvider from "pages/chat/context/chat";
const ChatPage = React.lazy(() => import("pages/chat"));
const UnSelectedChatPage = React.lazy(() => import("pages/chat/unselected"));

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <ChatPage />,
  },
  {
    path: "/",
    element: <UnSelectedChatPage />,
  },
]);

export default function AppRoutes() {
  return (
    <ChatProvider>
      <RouterProvider router={router} />
    </ChatProvider>
  );
}
