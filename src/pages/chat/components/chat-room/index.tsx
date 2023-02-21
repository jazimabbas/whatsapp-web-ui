import styled from "styled-components";
import Header from "./header";
import MessagesList from "./messages-list";
import Icon from "common/components/icons";
import Footer from "./footer";

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

const FooterContainer = styled.div`
  background: rgb(240, 240, 240);
  position: relative;
  z-index: 1;
`;

const ScrollButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 80px;
  width: 42px;
  height: 42px;
  z-index: -1;
  border-radius: 50%;
  color: rgb(145, 145, 145);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export default function ChatRoom() {
  return (
    <Container>
      <Body>
        <Background />
        <Header />
        <MessagesList />
        <FooterContainer>
          <ScrollButton>
            <Icon id="downArrow" />
          </ScrollButton>
          <Footer />
        </FooterContainer>
      </Body>
    </Container>
  );
}
