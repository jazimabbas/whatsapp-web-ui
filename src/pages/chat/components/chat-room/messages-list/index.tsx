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
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "4",
    body: "What time should we meet?",
    date: "20/02/2023",
    timestamp: "12:30",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "5",
    body: "Can you send me that file?",
    date: "21/02/2023",
    timestamp: "15:42",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "6",
    body: "I'll be there in 10 minutes.",
    date: "22/02/2023",
    timestamp: "10:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "7",
    body: "Let's meet at the coffee shop.",
    date: "23/02/2023",
    timestamp: "18:03",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "8",
    body: "Sorry, I can't make it today.",
    date: "24/02/2023",
    timestamp: "13:25",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "9",
    body: "No problem, we can reschedule.",
    date: "25/02/2023",
    timestamp: "16:08",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "10",
    body: "Do you have any suggestions for dinner?",
    date: "26/02/2023",
    timestamp: "20:12",
    messageStatus: "READ",
    isOpponent: false,
  },
  {
    id: "11",
    body: "How about that new Italian place?",
    date: "27/02/2023",
    timestamp: "09:52",
    messageStatus: "READ",
    isOpponent: true,
  },
  {
    id: "12",
    body: "Sounds good to me.",
    date: "28/02/2023",
    timestamp: "14:27",
    messageStatus: "DELIVERED",
    isOpponent: false,
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
