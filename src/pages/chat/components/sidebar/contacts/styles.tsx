import Icon from "common/components/icons";
import styled, { css } from "styled-components";

export const Contact = styled.div<{ isActive?: boolean }>`
  height: 72px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.common.primaryColor};
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      background-color: ${(props) => props.theme.common.primaryColor};
    `};

  &:hover {
    background-color: ${(props) => props.theme.common.primaryColor};
  }

  .sidebar-contact__icons,
  &:not(:focus) .sidebar-contact__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(24px);
    transition: transform 0.5s ease;
  }

  &:hover .sidebar-contact__icons {
    transform: translateX(0);
  }

  .sidebar-contact__icons > * {
    margin-left: 8px;
    color: ${(props) => props.theme.common.headerIconColor};
  }

  .icon {
    color: ${(props) => props.theme.common.primaryColor};
  }
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  overflow: hidden;
  flex: 1;
`;

export const contentStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopContent = styled.div`
  margin-bottom: 2px;

  ${contentStyles}
`;

export const messageStyles = css`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Name = styled.h2`
  color: ${(props) => props.theme.common.mainHeadingColor};
  font-size: 1rem;
  font-weight: 500;

  ${messageStyles}
`;

export const Time = styled.span`
  font-size: 0.7rem;
  color: ${(props) => props.theme.common.subHeadingColor};
`;

export const BottomContent = styled.div`
  ${contentStyles}
`;

export const MessageWrapper = styled.div`
  color: ${(props) => props.theme.common.subHeadingColor};
  font-size: 0.85rem;
  margin-right: 3px;
  overflow: hidden;

  ${contentStyles}
`;

export const MessageStatusIcon = styled(Icon)<{ isRead?: boolean }>`
  ${(props) =>
    props.isRead &&
    css`
      color: ${(props) => props.theme.common.readIconColor};
    `};
`;

export const Subtitle = styled.span`
  margin-left: 3px;
`;

export const UnreadContact = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.common.secondaryColor} !important;
  background-color: ${(props) => props.theme.common.tertiaryColor};
  border-radius: 18px;
  min-width: 18px;
  height: 18px;
  padding: 0 3px;
  line-height: 18px;
  vertical-align: middle;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
`;
