import ChatLayout from "../layouts";
import Icon from "common/components/icons";
import { useAppTheme } from "common/theme";
import { Container, ImageWrapper, Title, IconWrapper, Link, Image, Text } from "./styles";

export default function UnSelectedChatPage() {
  const theme = useAppTheme();

  const getImageURL = () => {
    if (theme.mode === "light") return "/assets/images/entry-image-light.webp";
    return "/assets/images/entry-image-dark.png";
  };

  return (
    <ChatLayout>
      <Container>
        <ImageWrapper>
          <Image src={getImageURL()} />
        </ImageWrapper>
        <Title> WhatsApp Web </Title>
        <Text>
          Send and receive messages without keeping your phone online. <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </Text>
        <Text>
          <span>Built by</span>{" "}
          <Link target="_blank" href="https://github.com/jazimabbas">
            Jazim Abbas
          </Link>
          <IconWrapper>
            <Icon id="heart" />
          </IconWrapper>
        </Text>
      </Container>
    </ChatLayout>
  );
}
