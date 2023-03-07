import React, { useState } from "react";
import { inbox } from "../data/inbox";
import { Inbox } from "common/types/common.type";

type User = {
  name: string;
  image: string;
};

type ChatContextProp = {
  user: User;
  inbox: Inbox[];
  activeChat?: Inbox;
  onChangeChat: (chat: Inbox) => void;
};

const initialValue: ChatContextProp = {
  user: { name: "Jazim Abbas", image: "/assets/images/girl.jpeg" },
  inbox,
  onChangeChat() {
    throw new Error();
  },
};

export const ChatContext = React.createContext<ChatContextProp>(initialValue);

export default function ChatProvider(props: { children: any }) {
  const { children } = props;

  const [user] = useState<User>(initialValue.user);
  const [inbox] = useState<Inbox[]>(initialValue.inbox);
  const [activeChat, setActiveChat] = useState<Inbox>();

  const handleChangeChat = (chat: Inbox) => {
    setActiveChat(chat);
  };

  return (
    <ChatContext.Provider value={{ user, inbox, activeChat, onChangeChat: handleChangeChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => React.useContext(ChatContext);
