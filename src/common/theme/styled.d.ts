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
    sidebar: {
      borderColor: string;
      iconColor: string;
      headerBg: string;
      contactContainerBg: string;
      contactColor: string;
      contactIconColor: string;
    };
    common: {
      containerColor: string;
      titleColor: string;
      subTitleColor: string;
      readTickColor: string;
      notificationBg: string;
      infoAlertBg: string;
    };
  }
}
