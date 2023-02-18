import Icon from "common/components/icons";
import styled from "styled-components";
import OptionsMenu from "../option-menu";
import SidebarAlert from "./alert";
import SearchField from "../search-field";
import InboxContact from "./contacts";

const SidebarContainer = styled.aside`
  min-width: 300px;
  flex: 40%;
  border-right: 1px solid #dadada;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    flex: 35%;

    & ~ div {
      flex: 65%;
    }
  }

  @media screen and (min-width: 1301px) {
    flex: 30%;

    & ~ div {
      flex: 70%;
    }
  }

  .icon {
    color: rgb(145, 145, 145);
  }
`;

const Header = styled.header`
  background: rgb(237, 237, 237);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px;
  min-height: 60px;
`;

const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Actions = styled.div`
  margin-right: 20px;

  & > * {
    display: inline-block;
    margin-left: 25px;
    cursor: pointer;
  }
`;

const ContactContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  background: #f5f5f5;
  border-top: 1px solid #dadada;
`;

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
        <InboxContact />
        <InboxContact />
        <InboxContact />
        <InboxContact />
        <InboxContact />
      </ContactContainer>
    </SidebarContainer>
  );
}
