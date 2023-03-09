import styled, { css } from "styled-components";

export const Container = styled.aside<{ readonly isOpen: boolean }>`
  width: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  transition: all 0.1s ease;
  overflow-x: hidden;
  overflow-y: auto;
  ${(props) =>
    props.isOpen &&
    css`
      flex: 20%;
    `}

  @media screen and (max-width: 1000px) {
    transition: transform 0.1s ease;
    transform: translateX(120vw);
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;

export const Header = styled.header`
  /* common header */
  background: ${(props) => props.theme.common.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px;
  min-height: 60px;
  /* common header */
`;

export const CloseButton = styled.button<{ onClick: any }>`
  .icon {
    color: ${(props) => props.theme.common.subHeadingColor};
    margin-right: 10px;
  }
`;

export const Heading = styled.h2`
  flex: 1;
  color: ${(props) => props.theme.common.mainHeadingColor};
  font-size: 1rem;
  margin-bottom: 2px;
`;

export const Content = styled.div`
  flex: 1;
`;
