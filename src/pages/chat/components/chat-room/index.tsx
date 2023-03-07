import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import ProfileSection from "./profile";
import Icon from "common/components/icons";
import MessagesList from "./messages-list";
import SearchSection from "./search-section";
import useChatRoom from "./hooks/useChatRoom";
import { Container, Body, Background, FooterContainer, ScrollButton } from "./styles";

export default function ChatRoom() {
  const {
    handleMenuOpen,
    handleShowIcon,
    isProfileOpen,
    isSearchOpen,
    isShowIcon,
    setIsProfileOpen,
    setIsSearchOpen,
    setShouldScrollToBottom,
    shouldScrollToBottom,
  } = useChatRoom();

  return (
    <Container>
      <Body>
        <Background />
        <Header
          title="Jazim"
          subTitle="Online"
          image="/assets/images/girl.jpeg"
          onSearchClick={() => handleMenuOpen("search")}
          onProfileClick={() => handleMenuOpen("profile")}
        />
        <MessagesList
          onShowBottomIcon={handleShowIcon}
          shouldScrollToBottom={shouldScrollToBottom}
        />
        <FooterContainer>
          {isShowIcon && (
            <ScrollButton onClick={() => setShouldScrollToBottom(true)}>
              <Icon id="downArrow" />
            </ScrollButton>
          )}
          <Footer />
        </FooterContainer>
      </Body>
      <Sidebar title="Search" isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
        <SearchSection />
      </Sidebar>
      <Sidebar title="Contact Info" isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)}>
        <ProfileSection />
      </Sidebar>
    </Container>
  );
}
