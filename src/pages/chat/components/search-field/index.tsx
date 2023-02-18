import Icon from "common/components/icons";
import styled from "styled-components";

const SearchWrapper = styled.div`
  padding: 7px 10px;
  height: 50px;
  background: #f6f6f6;
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
    color: rgb(51, 183, 246);
  }

  &:focus-within {
    background: white;

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

const IconContainer = styled.div`
  color: #919191;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  overflow: hidden;
`;

const Input = styled.input`
  background: white;
  color: rgb(74, 74, 74);
  padding-left: 60px;
  border-radius: 18px;
  width: 100%;
  height: 100%;

  &::placeholder {
    color: rgb(153, 153, 153);
  }
`;

export default function SearchField() {
  return (
    <SearchWrapper>
      <IconContainer>
        <Icon id="search" className="search-icon" />
        <button className="search__back-btn">
          <Icon id="back" />
        </button>
      </IconContainer>
      <Input placeholder="Search or start a new chat" />
    </SearchWrapper>
  );
}
