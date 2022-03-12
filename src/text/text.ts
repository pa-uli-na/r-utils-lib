/** Czy tekst zawiera tylko litery i nie jest pusty */
export const isOnlyLetters = (text: string): boolean =>
  !/^\s*$/.test(text) && /^[a-zA-Z\s]*$/.test(text);
