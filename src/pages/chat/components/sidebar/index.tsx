import SidebarAlert from "./alert";
import InboxContact from "./contacts";
import OptionsMenu from "../option-menu";
import SearchField from "../search-field";
import Icon from "common/components/icons";
import { useChatContext } from "pages/chat/context/chat";
import {
  Actions,
  Avatar,
  ContactContainer,
  Header,
  ImageWrapper,
  SidebarContainer,
} from "./styles";

export default function Sidebar() {
  const chatCtx = useChatContext();

  return (
    <SidebarContainer>
      <Header>
        <ImageWrapper>
          <Avatar src="/assets/images/girl.jpeg" />
        </ImageWrapper>
        <Actions>
          <button className="sidebar__action" aria-label="Status">
            <Icon id="status" className="icon" />
          </button>
          <button className="sidebar__action" aria-label="New chat">
            <Icon id="chat" className="icon" />
          </button>
          <OptionsMenu
            iconClassName="icon"
            className="icon"
            ariaLabel="Menu"
            iconId="menu"
            options={[
              "New group",
              "Create a room",
              "Profile",
              "Archived",
              "Starred",
              "Settings",
              "Log out",
            ]}
          />
        </Actions>
      </Header>
      <SidebarAlert />
      <SearchField />
      <ContactContainer>
        {chatCtx.inbox.map((inbox) => (
          <InboxContact
            key={inbox.id}
            inbox={inbox}
            isActive={inbox.id === chatCtx.activeChat?.id}
            onChangeChat={chatCtx.onChangeChat}
          />
        ))}
      </ContactContainer>
    </SidebarContainer>
  );
}
