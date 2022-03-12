import { isOnlyLetters } from "./text";

test("isOnlyLetters", () => {
  expect(isOnlyLetters("")).toBeFalsy();
  expect(isOnlyLetters("a")).toBeTruthy();
  expect(isOnlyLetters("000")).toBeFalsy();
  expect(isOnlyLetters("99.99")).toBeFalsy();

  expect(isOnlyLetters("000000")).toBeFalsy();
  expect(isOnlyLetters("000000")).toBeFalsy();
  expect(isOnlyLetters("000101")).toBeFalsy();
  expect(isOnlyLetters("500500")).toBeFalsy();
  expect(isOnlyLetters("900901")).toBeFalsy();

  expect(isOnlyLetters("0000 00")).toBeFalsy();
  expect(isOnlyLetters("0001 01")).toBeFalsy();
  expect(isOnlyLetters("5005 00")).toBeFalsy();
  expect(isOnlyLetters("9009 01")).toBeFalsy();
});
