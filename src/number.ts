/** Czy dany ciąg jest liczbą? */
export const isNumeric = (char: string | number): boolean =>
  /^\d+$/.test(String(char));

/** Czy po dodaniu kolejnego znaku, wartość nadal jest mniejsza niż MAX? */
export const isLessThanMaxValue = (
  key: string,
  currentValueText: string,
  maxValue: Number
): boolean => {
  const newValueText = currentValueText + key;
  const newValueNumber = Number(newValueText);
  return newValueNumber <= maxValue;
};

/** Czy po dodaniu nowego znaku wartość nadal jest jest większa niż MIN? */
export const isMoreThanMinValue = (
  key: string,
  currentValueText: string,
  minValue: Number
): boolean => {
  const newValueText = currentValueText + key;
  const newValueNumber = Number(newValueText);
  return newValueNumber >= minValue;
};

/** Czy po dodaniu nowego znaku wartość nadal jest krótsza niż MAX_LENGTH? */
export const isLessThanMaxLength = (
  key: string,
  currentValueText: string,
  maxLength: Number
): boolean => {
  const newValueText = currentValueText + key;
  return newValueText.length <= maxLength;
};
