import { useState } from "react";
import styled from "styled-components";
import Icon from "common/components/icons";
import useCloseMenu from "../../hooks/useCloseMenu";

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.btn-pressed {
    border-radius: 50%;
    background: #d5d5d5;
  }
`;

const Options = styled.ul`
  z-index: 1000;
  top: 40px;
  right: 0;
  position: absolute;
  width: 200px;
  padding: 10px 0;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 #00000042, 0 2px 10px 0 rgba(0, 0, 0, 0.16);
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

const Option = styled.li`
  padding: 15px 20px;
  color: #000000;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

type OptionsMenuProps = {
  iconClassName?: string;
  className?: string;
  iconId: string;
  ariaLabel?: string;
  options: string[];
  position?: string;
  showPressed?: boolean;
  [x: string]: any;
};

export default function OptionsMenu(props: OptionsMenuProps) {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useCloseMenu(() => setShowOptions(false));
  const {
    iconId,
    options,
    ariaLabel,
    className,
    iconClassName,
    position = "left",
    showPressed = true,
  } = props;

  const getBtnClassName = (): string => {
    let _className = showOptions && showPressed ? "btn-pressed " : "";
    _className += className ?? "";

    return _className;
  };

  const getOptionsClassName = (): string => {
    let className = showOptions ? "active " : "";
    className += position === "right" ? "right" : "";

    return className;
  };

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <Container ref={ref}>
      <Button aria-label={ariaLabel} className={getBtnClassName()} onClick={handleClick}>
        <Icon id={iconId} className={iconClassName} />
      </Button>
      <Options className={getOptionsClassName()}>
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Options>
    </Container>
  );
}
