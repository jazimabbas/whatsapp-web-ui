import { useState } from "react";
import Icon from "common/components/icons";
import { AlertContainer, IconWrapper, TextContainer, Text, CloseIcon } from "./styles";

export default function SidebarAlert() {
  const [isClose, setIsClose] = useState(false);

  if (isClose) return <></>;

  return (
    <>
      <AlertContainer>
        <CloseIcon onClick={() => setIsClose(true)} />
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
