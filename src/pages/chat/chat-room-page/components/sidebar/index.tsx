import Icon from "common/components/icons";
import { CloseButton, Heading, Content, Header, Container } from "./styles";

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
