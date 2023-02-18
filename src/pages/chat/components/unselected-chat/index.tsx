import styled from "styled-components";

const Container = styled.div`
  background: #f8f9fa;
  padding: 20px;
  height: 100%;
  flex: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 6px solid rgb(6, 215, 85);
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Title = styled.h1`
  color: #525252;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.85rem;
  font-weight: 500;
  max-width: 500px;
  line-height: 24px;
  display: flex;
  align-items: center;

  &:first-of-type {
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(74, 74, 74, 0.08);
  }

  &:last-of-type {
    padding-top: 30px;
  }
`;

export default function UnSelectedChat() {
  return (
    <Container>
      <ImageWrapper>
        <Image src="/assets/images/unselected-chat.jpg" />
      </ImageWrapper>
      <Title> Keep your phone connected </Title>
      <Text>
        WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone
        to Wi-Fi.
      </Text>
    </Container>
  );
}
