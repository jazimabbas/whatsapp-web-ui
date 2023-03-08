import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.btn-pressed {
    border-radius: 50%;
    background: ${(props) => props.theme.options.bg};
  }
`;

export const Options = styled.ul`
  z-index: 1000;
  top: 40px;
  right: 0;
  position: absolute;
  width: 200px;
  padding: 10px 0;
  background-color: ${(props) => props.theme.common.secondaryColor};
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.options.boxShadow};
  transition: all 0.2s ease-in;
  opacity: 0;
  transform: scale(0);

  &.active {
    opacity: 1;
    transform: scale(1);
  }

  &.right {
    right: unset;
    left: -210px;
  }
`;

export const Option = styled.li`
  padding: 15px 20px;
  color: ${(props) => props.theme.common.mainHeadingColor};
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.common.primaryColor};
  }
`;
