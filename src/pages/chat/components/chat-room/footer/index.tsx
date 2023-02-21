import Icon from "common/components/icons";
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

const Button = styled.button`
  transform: scale(1);
  opacity: 1;
  transition: all 0.5s ease;
  margin-bottom: 10px;

  &:nth-of-type(n) {
    transition-delay: 0.5s;
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
  return (
    <Wrapper>
      <IconsWrapper>
        <AttachButton>
          <Icon id="attach" />
        </AttachButton>
        <ButtonsContainer>
          {attachButtons.map((btn) => (
            <Button key={btn.label}>
              <Icon id={btn.icon} />
            </Button>
          ))}
        </ButtonsContainer>
      </IconsWrapper>
    </Wrapper>
  );
}
