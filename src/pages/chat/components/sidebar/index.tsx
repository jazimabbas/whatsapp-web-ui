import SidebarAlert from "./alert";
import InboxContact from "./contacts";
import OptionsMenu from "../option-menu";
import SearchField from "../search-field";
import Icon from "common/components/icons";
import {
  Actions,
  Avatar,
  ContactContainer,
  Header,
  ImageWrapper,
  SidebarContainer,
} from "./styles";

const inbox = [
  {
    image: "/assets/images/girl.jpeg",
    title: "Jazim",
    subTitle: "Subtitle",
    isPinned: false,
    notificationCount: 0,
    timestamp: "10:45",
    messageStatus: "SENT" as const,
  },
];

export default function Sidebar() {
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
        <InboxContact inbox={inbox[0]} />
        <InboxContact inbox={inbox[0]} />
        <InboxContact inbox={inbox[0]} />
        <InboxContact inbox={inbox[0]} />
      </ContactContainer>
    </SidebarContainer>
  );
}
