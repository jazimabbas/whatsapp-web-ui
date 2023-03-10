import styled from "styled-components";
import { FadeLoader } from "react-spinners";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.splash.bg};
`;

export default function MainPageLoader() {
  return (
    <LoaderContainer>
      <FadeLoader color={"#3AB0FF"} />
    </LoaderContainer>
  );
}
