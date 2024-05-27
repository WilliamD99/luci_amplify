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
