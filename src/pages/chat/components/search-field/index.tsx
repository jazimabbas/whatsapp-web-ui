import Icon from "common/components/icons";
import { SearchWrapper, IconContainer, Input } from "./styles";

type SearchFieldProps = {
  placeholder?: string;
  [x: string]: any;
};

export default function SearchField(props: SearchFieldProps) {
  const { placeholder, ...rest } = props;

  return (
    <SearchWrapper {...rest}>
      <IconContainer>
        <Icon id="search" className="search-icon" />
        <button className="search__back-btn">
          <Icon id="back" />
        </button>
      </IconContainer>
      <Input placeholder={placeholder ?? "Search or start a new chat"} />
    </SearchWrapper>
  );
}
