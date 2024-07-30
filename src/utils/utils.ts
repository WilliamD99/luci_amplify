import { JSONContent } from "novel";
import { Schema } from "../../amplify/data/resource";

export function getInitials(input: string) {
  if (!input) return;
  // Split the input string into an array of words
  const words = input.trim().split(/\s+/);

  // Check the number of words and process accordingly
  if (words.length === 1) {
    // If there is only one word, return the first two letters of that word
    return words[0].substring(0, 2).toUpperCase();
  } else {
    // If there are two or more words, return the first letter of the first two words
    return (words[0][0] + words[1][0]).toUpperCase();
  }
}

// This is used for the date group
export function formatDateString(dateStr: string): string {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  } else {
    // For other dates, format the date as "Monday, May 27th"
    return date.toLocaleDateString("en-US", options);
  }
}

export function groupMsgByDate(
  data: {
    readonly content: string;
    readonly identifier: string;
    readonly receiver: string;
    readonly relationshipId: string;
    readonly id: string;
    readonly createdAt: string;
    readonly updatedAt: string | null;
  }[]
) {
  const groupedData = new Map();

  data.forEach((item) => {
    if (item.createdAt) {
      let date = new Date(item.createdAt).toDateString();
      // const date = item.createdAt.split("T")[0];

      if (groupedData.has(date)) {
        groupedData.get(date).push(item);
      } else {
        groupedData.set(date, [item]);
      }
    }
  });

  const result = Array.from(groupedData, ([date, content]) => ({
    date,
    content: content.sort((a: any, b: any) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateA.getTime() - dateB.getTime();
    }),
  })).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });
  return result;
}

export function convertToUserTimezone(utcString: Date | string): string {
  // Parse the input string to a Date object
  const utcDate = new Date(utcString);

  // Format the Date object to "hh:mm AM | PM"
  const hours = utcDate.getHours();
  const minutes = utcDate.getMinutes();
  const period = hours < 12 ? "AM" : "PM";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0"); // Convert 24-hour to 12-hour format
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

  return formattedTime;
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let debounceTimer: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}
