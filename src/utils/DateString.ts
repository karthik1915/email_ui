/**
 * Converts a Date object to a string.
 * @param date - The Date object to convert.
 * @returns The date as a string in ISO format.
 */
export function dateToString(date: Date): string {
  return date.toISOString();
}

/**
 * Converts a string to a Date object.
 * @param dateString - The string to convert.
 * @returns The Date object.
 */
export function stringToDate(dateString: string): Date {
  return new Date(dateString);
}
