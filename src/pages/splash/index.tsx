import styled, { css } from "styled-components";
import Icon from "common/components/icons";
import useAppLoad from "./hooks/useAppLoad";

const Container = styled.div`
  background: rgb(240, 240, 240);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
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

const Logo = styled(Icon)`
  z-index: 3;
  fill: rgb(191, 191, 191);
  width: 60px;
  height: 60px;
`;

const Progress = styled.div<{ isCompleted: boolean; progess: number }>`
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
    background: rgb(0, 216.5, 187.0288);
    transition: width 2s linear;

    ${(props) => css`
      width: ${props.progess}%;
    `};

    ${(props) => props.isCompleted && `width: 100%;`};
  }
`;

const Title = styled.h1`
  color: #525252;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.85rem;
`;

const EncryptionIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`;

const Link = styled.a`
  text-decoration: revert-layer;

  &:hover {
    text-decoration: revert-layer;
  }
`;

export default function SplashScreen() {
  const { progress, isLoaded } = useAppLoad();

  return (
    <Container>
      <LogoWrapper>
        <Logo id="whatsapp" />
      </LogoWrapper>
      <Progress isCompleted={isLoaded} progess={progress} />
      <Title>WhatsApp</Title>
      <SubTitle>
        <EncryptionIcon id="lock" /> End-to-end encrypted. Built by{" "}
        <Link href="https://github.com/jazimabbas" target="_blank">
          Jazim Abbas
        </Link>{" "}
        ❤️.
      </SubTitle>
    </Container>
  );
}
