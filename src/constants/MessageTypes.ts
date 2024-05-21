export type MessageType = {
  id: string; // Unique identifier for the message
  sender: {
    name: string; // Sender's name
    phone?: string;
    email: string; // Sender's email address
  };
  recipient: {
    name: string; // Recipient's name
    email: string; // Recipient's email address
  };
  subject?: string; // Subject of the message
  body: string; // Content of the message
  attachments?: Array<string>; // URLs to message attachments
  timestamp: string; // Timestamp indicating when the message was sent/received
  status: "unread" | "read" | "archived"; // Status of the message
  labels?: Array<string>; // Labels/tags assigned to the message
  priority?: "low" | "normal" | "high"; // Priority level of the message
  type: "email" | "sms" | "chat"; // Type of the message
  replyThread?: Array<MessageType>; // Thread of replies associated with the message
  deliveryStatus?: "sent" | "delivered" | "failed"; // Delivery status of the message
};
