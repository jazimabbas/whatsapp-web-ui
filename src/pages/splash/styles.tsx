import Icon from "common/components/icons";
import styled, { css } from "styled-components";

export const Container = styled.div`
  background: rgb(240, 240, 240);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: -100px;
    bottom: 0;
    top: 0;
    width: 100px;
    background: linear-gradient(
      90deg,
      rgba(240, 240, 240, 0.5) 0,
      rgba(240, 240, 240, 0.5) 33.33%,
      rgba(240, 240, 240, 0) 44.1%,
      rgba(240, 240, 240, 0) 55.8%,
      rgba(240, 240, 240, 0.5) 66.66%,
      rgba(240, 240, 240, 0.5)
    );
    animation: glisten 2s ease-in 0.8s infinite;
  }

  @keyframes glisten {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(150px);
    }
  }
`;

export const Logo = styled(Icon)`
  z-index: 3;
  fill: rgb(191, 191, 191);
  width: 60px;
  height: 60px;
`;

export const Progress = styled.div<{ progess: number }>`
  width: 200px;
  max-width: 400px;
  height: 4px;
  width: 90%;
  margin: 20px auto 30px;
  background: rgb(230, 230, 230);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    /* background: rgb(0, 216.5, 187.0288); */
    background: #42CBA5;
    transition: width 2s linear;

    ${(props) => css`
      width: ${props.progess}%;
    `};
  }
`;

export const Title = styled.h1`
  color: #525252;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.85rem;
`;

export const EncryptionIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`;

export const Link = styled.a`
  text-decoration: revert-layer;

  &:hover {
    text-decoration: revert-layer;
  }
`;
