import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.common.primaryColor};
  padding-bottom: 2pc;
  height: 100%;
`;

export const profileSectionStyles = css`
  background: ${(props) => props.theme.common.secondaryColor};
  margin-bottom: 10px;
  box-shadow: ${(props) => props.theme.chatRoom.profileBoxShadow};
  padding: 10px 20px;
`;

export const PersonalInfo = styled.div`
  ${profileSectionStyles}

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

export const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  /* common avatar should be refactor */
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* common avatar should be refactor */
`;

export const ProfileName = styled.h2`
  flex: 1;
  color: ${(props) => props.theme.common.mainHeadingColor};
  font-size: 1.2rem;
  align-self: center;
`;

export const Section = styled.div`
  ${profileSectionStyles}
`;

export const HeadingWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h2`
  color: ${(props) => props.theme.chatRoom.profileHeadingColor};
  font-size: 0.85rem;
  flex: 1;
`;

export const MediaButton = styled.button`
  .icon {
    color: ${(props) => props.theme.common.subHeadingColor};
  }
`;

export const MediaImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MediaImage = styled.img`
  width: 32%;
`;

export const AboutItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => props.theme.common.subHeadingColor};

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.common.primaryColor};
  }
`;

export const ActionSection = styled(Section)`
  color: ${(props) => props.theme.chatRoom.profileActionColor};
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;

  .icon {
    margin-right: 20px;
  }
`;

export const ActionText = styled.p`
  flex: 1;
`;
