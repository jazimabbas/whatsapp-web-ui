import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  splash: {
    bg: "rgb(18.6, 28.22, 33.4)",
    gradient:
      "linear-gradient( 90deg, rgba(18.6, 28.22, 33.4, .5) 0, rgba(18.6, 28.22, 33.4, .5) 33.33%, rgba(18.6, 28.22, 33.4, 0) 44.1%, rgba(18.6, 28.22, 33.4, 0) 55.8%, rgba(18.6, 28.22, 33.4, .5) 66.66%, rgba(18.6, 28.22, 33.4, .5))",
    logoFill: "rgb(108, 113, 117)",
    progressBg: "rgb(42, 47, 50)",
    progressAfterBg: "rgb(12, 137, 124)",
    titleColor: "rgba(241, 241, 242, 0.88)",
    subTitleColor: "rgba(241, 241, 242, 0.45)",
    iconColor: "rgba(241, 241, 242, 0.88)",
  },
  layout: {
    bg: "#dddbd1",
    contentBoxShadowColor: "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)",
  },
  sidebar: {},
  search: {
    iconColor: "#00a884",
  },
  options: {
    bg: "#d5d5d5",
    boxShadow: "0 2px 5px 0 #00000042, 0 2px 10px 0 rgba(0, 0, 0, 0.16)",
  },
  unselectedChat: {
    bg: "#f8f9fa",
  },
  chatRoom: {
    bg: "#e4dcd4",
    scrollBtnBoxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)",
    profileBoxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 3px 0px",
    profileHeadingColor: "rgb(0, 150, 136)",
    profileActionColor: "rgb(223, 51, 51)",
  },
  common: {
    borderColor: "#dadada",
    primaryColor: "rgb(237, 237, 237)",
    mainHeadingColor: "#000000",
    subHeadingColor: "#00000099",
    secondaryColor: "white",
    tertiaryColor: "#25D366",
    readIconColor: "#0da9e5",
    unreadIconColor: "#b3b3b3",
    headerIconColor: "rgb(145, 145, 145)",
  },
  alert: {
    infoColor: "#9de1fe",
    iconContainerColor: "white",
  },
  badge: {
    textColor: "#000",
    bgColor: "#e1f2fa",
  },
  sentMessage: {
    textColor: "#000",
    bgColor: "#dbf8c6",
  },
  receivedMessage: {
    textColor: "#000",
    bgColor: "white",
  },
  encryptionMessage: {
    bgColor: "#fdf4c5",
    textColor: "#000",
  },
};
