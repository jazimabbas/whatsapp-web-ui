import Icon from "common/components/icons";
import { AlertContainer, IconWrapper, TextContainer, Text, CloseIcon } from "./styles";

export default function SidebarAlert() {
  return (
    <>
      <AlertContainer>
        <CloseIcon src="/assets/images/close.png" />
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
