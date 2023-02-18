import Icon from "common/components/icons";
import styled, { css } from "styled-components";

const Container = styled.div`
  flex: 1;
  overflow-y: scroll;
  background: #f5f5f5;
  border-top: 1px solid #dadada;
`;

const Contact = styled.div`
  height: 72px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
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
    color: #b3b3b3;
  }

  .icon {
    color: white;
  }
`;

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  overflow: hidden;
  flex: 1;
`;

const contentStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopContent = styled.div`
  margin-bottom: 2px;

  ${contentStyles}
`;

const messageStyles = css`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Name = styled.h2`
  color: #000000;
  font-size: 1rem;
  font-weight: 500;

  ${messageStyles}
`;

const Time = styled.span`
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.45);
`;

const BottomContent = styled.div`
  ${contentStyles}
`;

const MessageWrapper = styled.div`
  color: #00000099;
  font-size: 0.85rem;
  margin-right: 3px;
  overflow: hidden;

  ${contentStyles}
`;

const UnreadContact = styled.span`
  display: inline-block;
  color: white !important;
  background-color: rgb(6, 215, 85);
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

export default function InboxContact() {
  return (
    <Contact>
      <AvatarWrapper>
        <Avatar src="/assets/images/girl.jpeg" />
      </AvatarWrapper>
      <Content>
        <TopContent>
          <Name>Jazim Abbas</Name>
          <Time>11:21</Time>
        </TopContent>
        <BottomContent>
          <MessageWrapper>
            <Icon id="singleTick" />
            <span className={`sidebar-contact__message ${"sidebar-contact__message--unread"}`}>
              Message here ..
            </span>
          </MessageWrapper>
          <div className="sidebar-contact__icons">
            <Icon id="pinned" className="sidebar-contact__icon" />
            <UnreadContact>5</UnreadContact>
            <button aria-label="sidebar-contact__btn">
              <Icon
                id="downArrow"
                className="sidebar-contact__icon sidebar-contact__icon--dropdown"
              />
            </button>
          </div>
        </BottomContent>
      </Content>
    </Contact>
  );
}
