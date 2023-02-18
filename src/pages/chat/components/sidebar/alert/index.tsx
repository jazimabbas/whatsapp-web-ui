import styled from "styled-components";
import Icon from "common/components/icons";

const AlertContainer = styled.div`
  min-height: 85px;
  padding: 20px;
  display: flex;
  align-items: center;
  background: #9de1fe;

  .underline {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;

  .icon {
    color: white;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Text = styled.p`
  &:first-of-type {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #343738;
  }

  &:last-of-type {
    font-size: 0.85rem;
    color: #414a4e;
    line-height: 17px;
  }
`;

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
