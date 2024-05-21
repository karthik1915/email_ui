import { MessageType } from "@/constants/MessageTypes";

/**
 * Returns the ID of the first item in the messages array.
 * @param messages - Array of MessageType objects.
 * @returns The ID of the first message.
 */
export function getFirstMessageId(messages: MessageType[]): string {
  if (messages.length === 0) {
    throw new Error("The messages array is empty.");
  }
  return messages[0].id;
}
