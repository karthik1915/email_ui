export function getRelativeTime(date: Date): string {
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - date.getTime();
  const diffInMinutes = Math.round(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.round(diffInMinutes / 60);
  const diffInDays = Math.round(diffInHours / 24);
  const diffInMonths = Math.round(diffInDays / 30);
  const diffInYears = Math.round(diffInDays / 365);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
  } else if (diffInDays < 30) {
    return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
  } else if (diffInYears === 1) {
    return "about a year ago";
  } else if (diffInYears > 1) {
    return `over a year ago`;
  } else {
    return "unknown";
  }
}
