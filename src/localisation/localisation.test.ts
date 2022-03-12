import { isLocalisationCode } from "./localisation";

test("isLocalisationCode", () => {
  expect(isLocalisationCode("")).toBeFalsy();
  expect(isLocalisationCode("aaa")).toBeFalsy();
  expect(isLocalisationCode("000")).toBeFalsy();

  expect(isLocalisationCode("000000")).toBeTruthy();
  expect(isLocalisationCode("000000")).toBeTruthy();
  expect(isLocalisationCode("000101")).toBeTruthy();
  expect(isLocalisationCode("500500")).toBeTruthy();
  expect(isLocalisationCode("900901")).toBeTruthy();

  expect(isLocalisationCode("0000 00")).toBeTruthy();
  expect(isLocalisationCode("0001 01")).toBeTruthy();
  expect(isLocalisationCode("5005 00")).toBeTruthy();
  expect(isLocalisationCode("9009 01")).toBeTruthy();

  expect(isLocalisationCode(0)).toBeFalsy();
});
