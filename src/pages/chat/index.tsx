import Sidebar from "./components/sidebar";
import ChatRoom from "./components/chat-room";
// import UnSelectedChat from "./components/unselected-chat";
import { App, Content, Message } from "./styles";

export default function ChatPage() {
  return (
    <App>
      <Message> Currently Only available on desktop or large devices 😊. </Message>
      <Content>
        <Sidebar />
        <ChatRoom />
        {/* <UnSelectedChat /> */}
      </Content>
    </App>
  );
}
