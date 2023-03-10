import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    splash: {
      bg: string;
      gradient: string;
      logoFill: string;
      progressBg: string;
      progressAfterBg: string;
      titleColor: string;
      subTitleColor: string;
      iconColor: string;
    };
    layout: {
      bg: string;
      contentBoxShadowColor: string;
    };
    sidebar: {};
    search: {
      iconColor: string;
    };
    options: {
      bg: string;
      boxShadow: string;
    };
    unselectedChat: {
      bg: string;
    };
    chatRoom: {
      bg: string;
      scrollBtnBoxShadow: string;
      profileBoxShadow: string;
      profileHeadingColor: string;
      profileActionColor: string;
    };
    common: {
      borderColor: string;
      primaryColor: string;
      mainHeadingColor: string;
      subHeadingColor: string;
      secondaryColor: string;
      tertiaryColor: string;
      readIconColor: string;
      unreadIconColor: string;
      headerIconColor: string;
    };
    alert: {
      infoColor: string;
      iconContainerColor: string;
      closeIconColor: string;
    };
    badge: {
      textColor: string;
      bgColor: string;
    };
    sentMessage: {
      textColor: string;
      bgColor: string;
    };
    receivedMessage: {
      textColor: string;
      bgColor: string;
    };
    encryptionMessage: {
      textColor: string;
      bgColor: string;
    };
  }
}
