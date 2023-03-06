import Sidebar from "./components/sidebar";
import ChatRoom from "./components/chat-room";
import { useChatContext } from "./context/chat";
import { App, Content, Message } from "./styles";
import UnSelectedChat from "./components/unselected-chat";

export default function ChatPage() {
  const chatCtx = useChatContext();

  return (
    <App>
      <Message> Currently Only available on desktop or large devices 😊. </Message>
      <Content>
        <Sidebar />
        {chatCtx.activeChat ? <ChatRoom /> : <UnSelectedChat />}
      </Content>
    </App>
  );
}
