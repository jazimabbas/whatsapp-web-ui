import Icon from "common/components/icons";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* should be refactor to one wrapper. using multiple places */
  padding: 10px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  /* should be refactor to one wrapper. using multiple places */
`;

const IconsWrapper = styled.div`
  position: relative;
`;

const AttachButton = styled.button`
  margin-left: 10px;
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
    transition-delay: 0.2s;
  }

  &:nth-of-type(3) {
    transition-delay: 0.15s;
  }

  &:nth-of-type(4) {
    transition-delay: 0.1s;
  }

  &:nth-of-type(5) {
    transition-delay: 0.05s;
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
          <Icon id="attach" />
        </AttachButton>
        <ButtonsContainer>
          {attachButtons.map((btn) => (
            <Button showIcon={showIcons} key={btn.label}>
              <Icon id={btn.icon} />
            </Button>
          ))}
        </ButtonsContainer>
      </IconsWrapper>
    </Wrapper>
  );
}
