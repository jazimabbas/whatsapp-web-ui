export type MessageStatus = "READ" | "DELIVERED" | "SENT";

export type Inbox = {
  id: string;
  name: string;
  image: string;
  lastMessage?: string;
  timestamp?: string;
  messageStatus?: MessageStatus;
  notificationsCount?: number;
  isPinned?: boolean;
  isOnline?: boolean;
};
