import styled from "styled-components";
import Sidebar from "./components/sidebar";
import UnSelectedChat from "./components/unselected-chat";

export const App = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #dddbd1;
  position: relative;

  &::before {
    width: 100%;
    /* height: 120px; */
    top: 0;
    left: 0;
    background: rgb(0, 150, 136);
    position: absolute;
    content: "";
    z-index: 1;
  }

  @media screen and (min-width: 1450px) {
    padding: 20px;
  }
`;

export const Message = styled.p`
  display: none;

  @media screen and (max-width: 500px) {
    padding-top: 200px;
    text-align: center;
    font-size: 1.2rem;
    display: block;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1450px;
  margin: 0 auto;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 100;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (min-width: 1450px) {
    height: calc(100vh - 40px);
  }
`;

export default function ChatPage() {
  return (
    <App>
      <Message> Only available on desktop 😊. </Message>
      <Content>
        <Sidebar />
        <UnSelectedChat />
      </Content>
    </App>
  );
}
