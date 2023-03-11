import styled, { css } from "styled-components";

export const Container = styled.div`
  /* should refactor to header  */
  background: ${(props) => props.theme.common.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px;
  min-height: 60px;
  /* should refactor to header  */

  z-index: 10;

  .icon {
    color: ${(props) => props.theme.common.headerIconColor};
  }

  .search-icon {
    width: 30px;
    height: 30px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Avatar = styled.img`
  /* should refactor to avatar */
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* should refactor to avatar */
`;

export const ProfileWrapper = styled.div<{ onClick: any }>`
  flex: 1;
  cursor: pointer;
`;

export const profileStyles = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Name = styled.h2`
  color: ${(props) => props.theme.common.mainHeadingColor};
  font-size: 1rem;
  margin-bottom: 2px;

  ${profileStyles}
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.common.subHeadingColor};
  font-size: 0.75rem;

  ${profileStyles}
`;

export const Actions = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;

  .action-menus-wrapper {
    z-index: 20;
  }
`;

export const actionStyles = css`
  margin-left: 25px;
  cursor: pointer;
`;

export const Action = styled.button<any>`
  ${actionStyles}
`;
