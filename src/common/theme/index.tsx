import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  splash: {
    bg: "rgb(240, 240, 240)",
    gradient:
      "linear-gradient(90deg,rgba(240, 240, 240, 0.5) 0,rgba(240, 240, 240, 0.5) 33.33%,rgba(240, 240, 240, 0) 44.1%,rgba(240, 240, 240, 0) 55.8%, rgba(240, 240, 240, 0.5) 66.66%, rgba(240, 240, 240, 0.5))",
    logoFill: "rgb(191, 191, 191)",
    progressBg: "rgb(230, 230, 230)",
    progressAfterBg: "#42CBA5",
    titleColor: "#525252",
    subTitleColor: "rgba(0, 0, 0, 0.45)",
    iconColor: "rgba(0, 0, 0, 0.25)",
  },
  layout: {
    bg: "#dddbd1",
    contentBoxShadowColor: "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)",
  },
  sidebar: {
    borderColor: "#dadada",
    iconColor: "rgb(145, 145, 145)",
    headerBg: "rgb(237, 237, 237)",
    contactContainerBg: "white",
    contactColor: "#ebebeb",
    contactIconColor: "#b3b3b3",
  },
  search: {
    iconColor: "#00a884",
    containerColor: "rgb(237, 237, 237)",
    textColor: "#3b4a54",
  },
  common: {
    containerColor: "white",
    titleColor: "#000000",
    subTitleColor: "#00000099",
    readTickColor: "#0da9e5",
    notificationBg: "#25D366",
    infoAlertBg: "#9de1fe",
  },
};
