import {
  isInRange,
  isInteger,
  isLessThanMaxLength,
  isLessThanMaxValue,
  isMoreThanMinValue,
} from "../scancode/scancode";

describe("isInteger", () => {
  test("isInteger - string", () => {
    expect(isInteger("")).toBeFalsy(); // 0
    expect(isInteger("0")).toBeTruthy(); // 1
    expect(isInteger("9")).toBeTruthy(); // 1
    expect(isInteger("99")).toBeTruthy(); // 2
    expect(isInteger("999")).toBeTruthy(); // 3
    expect(isInteger("9999")).toBeTruthy(); // 4
    expect(isInteger("99999")).toBeTruthy(); // 5
    expect(isInteger("999999")).toBeTruthy(); // 6
    expect(isInteger("9999999")).toBeTruthy(); // 7
    expect(isInteger("99999999")).toBeTruthy(); // 8
    expect(isInteger("999999999")).toBeTruthy(); // 9
    expect(isInteger("9999999999")).toBeTruthy(); // 10
    expect(isInteger("99999999999")).toBeTruthy(); // 11
    expect(isInteger("999999999999")).toBeTruthy(); // 12
    expect(isInteger("9999999999999")).toBeTruthy(); // 13
    expect(isInteger("99999999999999")).toBeTruthy(); // 14
    expect(isInteger("999999999999999999999999999999")).toBeTruthy(); // 30

    expect(isInteger("0.0")).toBeFalsy();
    expect(isInteger("215.0")).toBeFalsy();
    expect(isInteger("215,0")).toBeFalsy();
    expect(isInteger("99.99")).toBeFalsy();
    expect(isInteger("99,99")).toBeFalsy();
    expect(isInteger("aaa")).toBeFalsy();
    expect(isInteger("AAA")).toBeFalsy();
    expect(isInteger("aa999")).toBeFalsy();
  });

  test("isInteger - number", () => {
    expect(isInteger(0)).toBeTruthy(); // 1
    expect(isInteger(9)).toBeTruthy(); // 1

    expect(isInteger(99)).toBeTruthy(); // 2
    expect(isInteger(999)).toBeTruthy(); // 3
    expect(isInteger(9999)).toBeTruthy(); // 4
    expect(isInteger(99999)).toBeTruthy(); // 5
    expect(isInteger(999999)).toBeTruthy(); // 6
    expect(isInteger(9999999)).toBeTruthy(); // 7
    expect(isInteger(99999999)).toBeTruthy(); // 8

    expect(isInteger(999999999)).toBeTruthy(); // 9
    expect(isInteger(9999999999)).toBeTruthy(); // 10
    expect(isInteger(99999999999)).toBeTruthy(); // 11
    expect(isInteger(999999999999)).toBeTruthy(); // 12
    expect(isInteger(9999999999999)).toBeTruthy(); // 13
    expect(isInteger(99999999999999)).toBeTruthy(); // 14
    // expect(isInteger(999999999999999999999999999999)).toBeTruthy(); // 30
    expect(isInteger(0.0)).toBeTruthy();
    expect(isInteger(215.0)).toBeTruthy();
    expect(isInteger(99.99)).toBeFalsy();
  });
});

describe("min / max value", () => {
  test("isLessThanMaxValue", () => {
    expect(isLessThanMaxValue("9", "", 100)).toBeTruthy();
    expect(isLessThanMaxValue("9", "99", 100)).toBeFalsy();
    expect(isLessThanMaxValue("9", "999", 100)).toBeFalsy();
  });

  test("isMoreThanMinValue", () => {
    expect(isMoreThanMinValue("9", "9", 100)).toBeFalsy();
    expect(isMoreThanMinValue("9", "99", 100)).toBeTruthy();
  });
});

describe("value in range", () => {
  test("isInRange", () => {
    expect(isInRange("9", "", 100, 1000)).toBeFalsy();
    expect(isInRange("9", "99", 100, 1000)).toBeTruthy();
    expect(isInRange("9", "999", 100, 1000)).toBeFalsy();
  });
});

describe("length", () => {
  test("isLessThanMaxLength", () => {
    expect(isLessThanMaxLength("9", "", 3)).toBeTruthy();
    expect(isLessThanMaxLength("9", "99", 3)).toBeTruthy();
    expect(isLessThanMaxLength("9", "999", 3)).toBeFalsy();
  });
});
