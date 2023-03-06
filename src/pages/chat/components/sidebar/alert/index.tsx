import Icon from "common/components/icons";
import { AlertContainer, IconWrapper, TextContainer, Text } from "./styles";

export default function SidebarAlert() {
  return (
    <>
      <AlertContainer>
        <IconWrapper>
          <Icon id="noWifi" className="icon" />
        </IconWrapper>
        <TextContainer>
          <Text> No Contacts </Text>
          <Text>
            You can import Contacts from Google{" "}
            <a className="underline" href="https://www.google.com" target="_blank" rel="noreferrer">
              {" "}
              Learn more.{" "}
            </a>
          </Text>
        </TextContainer>
      </AlertContainer>
    </>
  );
}
