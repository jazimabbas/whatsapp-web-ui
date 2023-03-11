import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding: 7px 10px;
  height: 50px;
  background: ${(props) => props.theme.common.secondaryColor};
  position: relative;

  .search-icon {
    opacity: 1;
    transition-delay: 0.3s;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.8s ease;
  }

  .search__back-btn {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.8s ease;
    opacity: 0;
    transition-delay: 0.3s;
    color: ${(props) => props.theme.search.iconColor};
  }

  &:focus-within {
    .search-icon {
      opacity: 0;
      transition-delay: 0s;
    }

    .search__back-btn {
      transform: rotate(360deg);
      opacity: 1;
      transition-delay: 0s;
    }
  }
`;

export const IconContainer = styled.div`
  color: ${(props) => props.theme.search.iconColor};
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  overflow: hidden;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.common.primaryColor};
  color: ${(props) => props.theme.common.subHeadingColor};
  padding-left: 60px;
  border-radius: 10px;
  width: 100%;
  height: 100%;

  &::placeholder {
    /* color: rgb(74, 74, 74); */
    color: ${(props) => props.theme.common.subHeadingColor};
  }

  &:focus {
    outline: none;
  }
`;
