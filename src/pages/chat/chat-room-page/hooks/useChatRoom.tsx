import { useState } from "react";
import { useChatContext } from "pages/chat/context/chat";

export default function useChatRoom() {
  const chatCtx = useChatContext();
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);

  const handleMenuOpen = (menu: "search" | "profile") => {
    setIsSearchOpen(menu === "search" ? true : false);
    setIsProfileOpen(menu === "profile" ? true : false);
  };

  const handleShowIcon = (state: boolean) => {
    setIsShowIcon(state);

    if (state === false) setShouldScrollToBottom(false);
  };

  return {
    activeInbox: chatCtx.activeChat,
    handleMenuOpen,
    handleShowIcon,
    isProfileOpen,
    isSearchOpen,
    isShowIcon,
    setIsProfileOpen,
    setIsSearchOpen,
    setShouldScrollToBottom,
    shouldScrollToBottom,
  };
}
