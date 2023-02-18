import styled from "styled-components";
import Header from "./header";

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Body = styled.div`
  min-width: 300px;
  flex: 40%;
  border-right: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.05;
  z-index: 1;
  background: url("/assets/images/bg-chat-room-light.png") #e4dcd4;
`;

export default function ChatRoom() {
  return (
    <Container>
      <Body>
        <Background />
        <Header />
      </Body>
    </Container>
  );
}
