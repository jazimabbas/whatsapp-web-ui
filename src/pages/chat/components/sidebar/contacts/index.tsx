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
  name: string;
  lastMessage?: string;
  isPinned?: boolean;
  notificationsCount?: number;
  timestamp?: string;
  messageStatus?: MessageStatus;
};

export default function InboxContact(props: { inbox: Inbox }) {
  const { name, lastMessage, image, timestamp } = props.inbox;

  return (
    <Contact>
      <AvatarWrapper>
        <Avatar src={image} />
      </AvatarWrapper>
      <Content>
        <TopContent>
          <Name>{name}</Name>
          {timestamp && lastMessage ? <Time>{timestamp}</Time> : <Trailing {...props.inbox} />}
        </TopContent>

        <BottomContent>
          <MessageWrapper>
            <Message {...props.inbox} />
          </MessageWrapper>

          {timestamp && lastMessage && <Trailing {...props.inbox} />}
        </BottomContent>
      </Content>
    </Contact>
  );
}

function Message(props: Pick<Inbox, "messageStatus" | "lastMessage">) {
  const { lastMessage, messageStatus } = props;

  if (!lastMessage) return <></>;

  return (
    <>
      <MessageStatusIcon
        isRead={messageStatus === "READ"}
        id={messageStatus === "SENT" ? "singleTick" : "doubleTick"}
      />
      <Subtitle>{lastMessage}</Subtitle>
    </>
  );
}

function Trailing(props: Pick<Inbox, "isPinned" | "notificationsCount">) {
  const { isPinned, notificationsCount } = props;

  return (
    <div className="sidebar-contact__icons">
      {isPinned && <Icon id="pinned" className="sidebar-contact__icon" />}

      {notificationsCount !== undefined && notificationsCount > 0 && (
        <UnreadContact>{notificationsCount}</UnreadContact>
      )}

      <button aria-label="sidebar-contact__btn">
        <Icon id="downArrow" className="sidebar-contact__icon sidebar-contact__icon--dropdown" />
      </button>
    </div>
  );
}
