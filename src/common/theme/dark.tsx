import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  splash: {
    bg: "rgb(18, 28, 33)",
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
    bg: "#090F13",
    contentBoxShadowColor: "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)",
  },
  sidebar: {},
  search: {
    iconColor: "rgba(241, 241, 242, 0.50)",
  },
  options: {
    bg: "rgb(19, 28, 33)",
    boxShadow: "0 2px 5px 0 #00000042, 0 2px 10px 0 rgba(0, 0, 0, 0.16)",
  },
  unselectedChat: {
    bg: "rgb(38, 45, 49)",
  },
  chatRoom: {
    bg: "#e4dcd4",
    scrollBtnBoxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)",
    profileBoxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 3px 0px",
    profileHeadingColor: "rgb(0, 150, 136)",
    profileActionColor: "rgb(223, 51, 51)",
  },
  common: {
    borderColor: "#3C4247",
    primaryColor: "#323739",
    mainHeadingColor: "rgba(241, 241, 242, 0.88)",
    subHeadingColor: "rgb(166, 168, 170)",
    secondaryColor: "rgb(19, 28, 33)",
    tertiaryColor: "rgb(0, 175, 156)",
    readIconColor: "#0da9e5",
    unreadIconColor: "#b3b3b3",
    headerIconColor: "rgb(145, 145, 145)",
  },
  alert: {
    infoColor: "#085373",
    iconContainerColor: "rgba(241, 241, 242, 0.8)",
    closeIconColor: "rgba(241, 241, 242, 0.92)",
  },
  badge: {
    textColor: "rgba(241, 241, 242, 0.92)",
    bgColor: "rgb(30, 42, 48)",
  },
  sentMessage: {
    textColor: "rgba(241, 241, 242, 0.95)",
    bgColor: "rgb(5, 97, 98)",
  },
  receivedMessage: {
    textColor: "rgba(241, 241, 242, 0.95)",
    bgColor: "rgb(38, 45, 49)",
  },
  encryptionMessage: {
    bgColor: "rgb(32, 39, 43)",
    textColor: "rgb(250, 217, 100)",
  },
};
