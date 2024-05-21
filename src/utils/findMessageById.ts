import { MessageType } from "@/constants/MessageTypes";

/**
 * Utility function to find a message by its id.
 * @param messages - Array of MessageType objects.
 * @param id - The id of the message to find.
 * @returns The MessageType object with the matching id, or undefined if not found.
 */
export function findMessageById(
  messages: MessageType[],
  id: string | null
): MessageType | undefined {
  const message = messages.find((message) => message.id === id);
  return message;
}
