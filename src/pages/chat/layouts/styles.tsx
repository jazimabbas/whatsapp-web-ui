import styled from "styled-components";

export const App = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.layout.bg};
  position: relative;

  &::before {
    width: 100%;
    /* height: 120px; */
    top: 0;
    left: 0;
    position: absolute;
    content: "";
    z-index: 1;
  }

  @media screen and (min-width: 1450px) {
    padding: 20px;
  }
`;

export const Message = styled.p`
  display: none;

  @media screen and (max-width: 500px) {
    padding-top: 200px;
    text-align: center;
    font-size: 1.2rem;
    display: block;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1450px;
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.layout.contentBoxShadowColor};
  position: relative;
  z-index: 100;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (min-width: 1450px) {
    height: calc(100vh - 40px);
  }
`;
