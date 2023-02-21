import Icon from "common/components/icons";
import styled, { css } from "styled-components";

const Container = styled.aside<{ readonly isOpen: boolean }>`
  width: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  transition: all 0.1s ease;
  overflow-x: hidden;
  overflow-y: auto;
  ${(props) =>
    props.isOpen &&
    css`
      flex: 20%;
    `}

  @media screen and (max-width: 1000px) {
    transition: transform 0.1s ease;
    transform: translateX(120vw);
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;

const Header = styled.header`
  /* common header */
  background: rgb(237, 237, 237);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px;
  min-height: 60px;
  /* common header */
`;

const CloseButton = styled.button<{ onClick: any }>`
  .icon {
    color: rgb(145, 145, 145);
    margin-right: 10px;
  }
`;

const Heading = styled.h2`
  flex: 1;
  color: #000000;
  font-size: 1rem;
  margin-bottom: 2px;
`;

const Content = styled.div`
  flex: 1;
`;

type SidebarProps = {
  title: string;
  isOpen?: boolean;
  onClose?: Function;
  children?: any;
};

export default function Sidebar(props: SidebarProps) {
  const { title, isOpen = false, onClose, children } = props;

  return (
    <Container isOpen={isOpen}>
      <Header>
        <CloseButton onClick={onClose}>
          <Icon id="cancel" className="icon" />
        </CloseButton>
        <Heading> {title} </Heading>
      </Header>
      <Content> {children} </Content>
    </Container>
  );
}
