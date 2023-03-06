import Icon from "common/components/icons";
import { MessageStatus } from "common/types/common.type";
import {
  Avatar,
  AvatarWrapper,
  BottomContent,
  Contact,
  Content,
  MessageStatusIcon,
  MessageWrapper,
  Name,
  Subtitle,
  Time,
  TopContent,
  UnreadContact,
} from "./styles";

type Inbox = {
  image: string;
  title: string;
  subTitle?: string;
  isPinned?: boolean;
  notificationCount?: number;
  timestamp?: string;
  messageStatus: MessageStatus;
};

export default function InboxContact(props: { inbox: Inbox }) {
  const { title, subTitle, image, timestamp } = props.inbox;

  return (
    <Contact>
      <AvatarWrapper>
        <Avatar src={image} />
      </AvatarWrapper>
      <Content>
        <TopContent>
          <Name>{title}</Name>
          {timestamp && subTitle ? <Time>{timestamp}</Time> : <Trailing {...props.inbox} />}
        </TopContent>

        <BottomContent>
          <MessageWrapper>
            <Message {...props.inbox} />
          </MessageWrapper>

          {timestamp && subTitle && <Trailing {...props.inbox} />}
        </BottomContent>
      </Content>
    </Contact>
  );
}

function Message(props: Pick<Inbox, "messageStatus" | "subTitle">) {
  const { subTitle, messageStatus } = props;

  if (!subTitle) return <></>;

  return (
    <>
      <MessageStatusIcon
        isRead={messageStatus === "READ"}
        id={messageStatus === "SENT" ? "singleTick" : "doubleTick"}
      />
      <Subtitle>{subTitle}</Subtitle>
    </>
  );
}

function Trailing(props: Pick<Inbox, "isPinned" | "notificationCount">) {
  const { isPinned, notificationCount } = props;

  return (
    <div className="sidebar-contact__icons">
      {isPinned && <Icon id="pinned" className="sidebar-contact__icon" />}

      {notificationCount !== undefined && notificationCount > 0 && (
        <UnreadContact>{notificationCount}</UnreadContact>
      )}

      <button aria-label="sidebar-contact__btn">
        <Icon id="downArrow" className="sidebar-contact__icon sidebar-contact__icon--dropdown" />
      </button>
    </div>
  );
}
