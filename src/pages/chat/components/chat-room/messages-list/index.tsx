import Icon from "common/components/icons";
import { MessageStatus } from "common/types/common.type";
import {
  ChatMessage,
  ChatMessageFiller,
  ChatMessageFooter,
  Container,
  Date,
  DateWrapper,
  EncryptionMessage,
  MessageGroup,
} from "./styles";

type Message = {
  id: string;
  body: string;
  date: string;
  timestamp: string;
  messageStatus: MessageStatus;
  isOpponent: boolean;
};

const messages: Message[] = [
  {
    id: "1",
    body: "Message here..",
    date: "19/02/2023",
    timestamp: "08:57",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "2",
    body: "Message here..",
    date: "19/02/2023",
    timestamp: "08:57",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "3",
    body: "Message here..",
    date: "19/02/2023",
    timestamp: "08:57",
    messageStatus: "SENT",
    isOpponent: true,
  },
];

export default function MessagesList() {
  return (
    <Container>
      <DateWrapper>
        <Date> 19/02/2023 </Date>
      </DateWrapper>
      <EncryptionMessage>
        <Icon id="lock" className="icon" />
        Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read
        or listen to them. Click to learn more.
      </EncryptionMessage>
      <MessageGroup>
        {messages.map((message) => (
          <SingleMessage key={message.id} message={message} />
        ))}
      </MessageGroup>
    </Container>
  );
}

function SingleMessage(props: { message: Message }) {
  const { message } = props;

  return (
    <ChatMessage
      key={message.id}
      className={message.isOpponent ? "chat__msg--received" : "chat__msg--sent"}
    >
      <span>{message.body}</span>
      <ChatMessageFiller />
      <ChatMessageFooter>
        <span>{message.timestamp}</span>
        {!message.isOpponent && (
          <Icon
            id={`${message.messageStatus === "SENT" ? "singleTick" : "doubleTick"}`}
            className={`chat__msg-status-icon ${
              message.messageStatus === "READ" ? "chat__msg-status-icon--blue" : ""
            }`}
          />
        )}
      </ChatMessageFooter>
    </ChatMessage>
  );
}
