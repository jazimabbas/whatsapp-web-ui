import styled from "styled-components";

export const AlertContainer = styled.div`
  min-height: 85px;
  padding: 20px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.alert.infoColor};
  position: relative;

  .underline {
    text-decoration: underline;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 15px;
  height: 15px;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;

  .icon {
    color: ${(props) => props.theme.common.secondaryColor} !important;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const Text = styled.p`
  &:first-of-type {
    font-size: 1rem;
    margin-bottom: 5px;
    color: ${props => props.theme.common.mainHeadingColor};
  }

  &:last-of-type {
    font-size: 0.85rem;
    color: ${props => props.theme.common.subHeadingColor};
    line-height: 17px;
  }
`;
