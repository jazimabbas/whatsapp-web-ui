import styled from "styled-components";

export const AlertContainer = styled.div`
  min-height: 85px;
  padding: 20px;
  display: flex;
  align-items: center;
  background: #9de1fe;

  .underline {
    text-decoration: underline;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;

  .icon {
    color: white !important;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const Text = styled.p`
  &:first-of-type {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #343738;
  }

  &:last-of-type {
    font-size: 0.85rem;
    color: #414a4e;
    line-height: 17px;
  }
`;
