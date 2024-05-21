export function getInitials(name: string): string {
  const words = name.split(" ");
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  } else {
    const initials = words
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
    return initials.slice(0, 2);
  }
}
