export class DateTimeUtils {
  private date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  getTimeFromDate(): string {
    const hours = this.date.getHours();
    const minutes = this.date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  getDateFormatted(): string {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[this.date.getMonth()];
    const day = this.date.getDate();
    const year = this.date.getFullYear();
    return `${month} ${day}, ${year}`;
  }
}
