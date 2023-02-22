import Icon from "common/components/icons";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: rgb(237, 237, 237);
  padding-bottom: 2pc;
  height: 100%;
`;

const profileSectionStyles = css`
  background: white;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
  padding: 10px 20px;
`;

const PersonalInfo = styled.div`
  ${profileSectionStyles}

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  /* common avatar should be refactor */
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* common avatar should be refactor */
`;

const ProfileName = styled.h2`
  flex: 1;
  color: #000000;
  font-size: 1.2rem;
  align-self: flex-start;
`;

const Section = styled.div`
  ${profileSectionStyles}
`;

const HeadingWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h2`
  color: rgb(0, 150, 136);
  font-size: 0.85rem;
  flex: 1;
`;

const MediaButton = styled.button`
  .icon {
    color: rgb(145, 145, 145);
  }
`;

const MediaImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MediaImage = styled.img`
  width: 32%;
`;

const AboutItem = styled.li`
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

export default function ProfileSection() {
  return (
    <Wrapper>
      <PersonalInfo>
        <AvatarWrapper>
          <Avatar src="/assets/images/girl.jpeg" alt="User Profile" />
        </AvatarWrapper>
        <ProfileName>Jazim Abbas</ProfileName>
      </PersonalInfo>

      <Section>
        <HeadingWrapper>
          <Heading>Media, Links and Documents</Heading>
          <MediaButton>
            <Icon id="rightArrow" className="icon" />
          </MediaButton>
        </HeadingWrapper>
        <MediaImagesWrapper>
          <MediaImage src="/assets/images/placeholder.jpeg" alt="Media" />
          <MediaImage src="/assets/images/placeholder.jpeg" alt="Media" />
          <MediaImage src="/assets/images/placeholder.jpeg" alt="Media" />
        </MediaImagesWrapper>
      </Section>

      <Section>
        <HeadingWrapper>
          <Heading>About and phone number</Heading>
        </HeadingWrapper>
        <ul>
          <AboutItem>Out here saving the world, one block of code at a time.</AboutItem>
          <AboutItem>+123456789</AboutItem>
        </ul>
      </Section>
    </Wrapper>
  );
}
