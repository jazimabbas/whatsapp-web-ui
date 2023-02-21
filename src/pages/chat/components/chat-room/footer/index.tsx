import Icon from "common/components/icons";
import { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  /* should be refactor to one wrapper. using multiple places */
  padding: 10px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  /* should be refactor to one wrapper. using multiple places */
`;

const iconCommonStyles = css`
  color: #919191;
`;

const IconsWrapper = styled.div`
  position: relative;
`;

const AttachButton = styled.button`
  margin-left: 10px;

  .icon {
    ${iconCommonStyles}
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 50px;
`;

const Button = styled.button<{ readonly showIcon: boolean }>`
  transform: ${(props) => (props.showIcon ? "scale(1)" : "scale(0)")};
  opacity: ${(props) => (props.showIcon ? 1 : 0)};
  transition: all 0.5s ease;
  margin-bottom: 10px;

  &:nth-of-type(1) {
    transition-delay: 0.25s;
  }

  &:nth-of-type(2) {
    transition-delay: 0.20s;
  }

  &:nth-of-type(3) {
    transition-delay: 0.15s;
  }

  &:nth-of-type(4) {
    transition-delay: 0.10s;
  }

  &:nth-of-type(5) {
    transition-delay: 0.05s;
  }
`;

const Input = styled.input`
  background: white;
  color: rgb(74, 74, 74);
  padding: 20px 10px;
  border-radius: 22px;
  flex: 1;
  height: 100%;
  margin-left: 7px;

  &::placeholder {
    color: rgb(153, 153, 153);
    font-size: 0.9rem;
  }
`;

const SendMessageButton = styled.button`
  .icon {
    margin-left: 8px;
    margin-right: 8px;
    width: 28px;
    height: 28px;
    padding: 3px;
    border-radius: 50%;
    ${iconCommonStyles}
  }
`;

const attachButtons = [
  { icon: "attachRooms", label: "Choose room" },
  { icon: "attachContacts", label: "Choose contact" },
  { icon: "attachDocument", label: "Choose document" },
  { icon: "attachCamera", label: "Use camera" },
  { icon: "attachImage", label: "Choose image" },
];

export default function Footer() {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <Wrapper>
      <IconsWrapper>
        <AttachButton onClick={() => setShowIcons(!showIcons)}>
          <Icon id="attach" className="icon" />
        </AttachButton>
        <ButtonsContainer>
          {attachButtons.map((btn) => (
            <Button showIcon={showIcons} key={btn.label}>
              <Icon id={btn.icon} />
            </Button>
          ))}
        </ButtonsContainer>
      </IconsWrapper>
      <Input placeholder="Type a message here .." />
      <SendMessageButton>
        <Icon id="send" className="icon" />
      </SendMessageButton>
    </Wrapper>
  );
}
