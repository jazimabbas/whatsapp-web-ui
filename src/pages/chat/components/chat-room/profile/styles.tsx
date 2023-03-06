import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: rgb(237, 237, 237);
  padding-bottom: 2pc;
  height: 100%;
`;

export const profileSectionStyles = css`
  background: white;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
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
  color: #000000;
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
  color: rgb(0, 150, 136);
  font-size: 0.85rem;
  flex: 1;
`;

export const MediaButton = styled.button`
  .icon {
    color: rgb(145, 145, 145);
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

  &:not(:last-of-type) {
    border-bottom: 1px solid #ebebeb;
  }
`;

export const ActionSection = styled(Section)`
  color: rgb(223, 51, 51);
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
