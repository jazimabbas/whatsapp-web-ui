import styled from "styled-components";
import Icon from "common/components/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0f2f5;
  color: #41525d;
`;

const WhatsAppIcon = styled(Icon)`
  fill: #9d9d9d;
  fill: #bebebe;
  width: 65px;
  height: 65px;
`;

const LoadingContainer = styled.div`
  width: 30%;
  margin: 40px 0;
  /* border: 2px solid tomato; */
  border: 1px solid #bebebe40;
  background-color: #bebebe40;

  hr {
    /* border-color: #777878; */
    /* border-color: #bebebe; */
    border: 1px solid green;
    width: 10%;
  }
`;

const Title = styled.p`
  font-size: 1.3rem;
`;

const Subtitle = styled.div`
  margin-top: 10px;
  color: #777878;
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  span {
    margin-left: 3px;
  }
`;

export default function SplashPage() {
  return (
    <Container>
      <WhatsAppIcon id="whatsapp" />
      <LoadingContainer>
        <hr />
      </LoadingContainer>
      <Title>WhatsApp</Title>
      <Subtitle>
        <Icon id="lock" />
        <span>End-to-end encrypted</span>
      </Subtitle>
    </Container>
  );
}
