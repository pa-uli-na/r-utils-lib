import { isArticleCode, isDanCode, isEanCode } from "./article";

describe("isDanCode", () => {
  test("isDanCode - string", () => {
    expect(isDanCode("")).toBeFalsy(); // 0
    expect(isDanCode("0")).toBeFalsy(); // 1
    expect(isDanCode("9")).toBeFalsy(); // 1
    expect(isDanCode("99")).toBeTruthy(); // 2
    expect(isDanCode("999")).toBeTruthy(); // 3
    expect(isDanCode("9999")).toBeTruthy(); // 4
    expect(isDanCode("99999")).toBeTruthy(); // 5
    expect(isDanCode("999999")).toBeTruthy(); // 6
    expect(isDanCode("9999999")).toBeTruthy(); // 7
    expect(isDanCode("99999999")).toBeTruthy(); // 8
    expect(isDanCode("999999999")).toBeFalsy(); // 9
    expect(isDanCode("9999999999")).toBeFalsy(); // 10
    expect(isDanCode("99999999999")).toBeFalsy(); // 11
    expect(isDanCode("999999999999")).toBeFalsy(); // 12
    expect(isDanCode("9999999999999")).toBeFalsy(); // 13
    expect(isDanCode("99999999999999")).toBeFalsy(); // 14
    expect(isDanCode("999999999999999999999999999999")).toBeFalsy(); // 30

    expect(isDanCode("0.0")).toBeFalsy();
    expect(isDanCode("215.0")).toBeFalsy();
    expect(isDanCode("99.99")).toBeFalsy();
    expect(isDanCode("aaa")).toBeFalsy();
    expect(isDanCode("AAA")).toBeFalsy();
    expect(isDanCode("aa999")).toBeFalsy();
  });

  test("isDanCode - number", () => {
    expect(isDanCode(0)).toBeFalsy(); // 1
    expect(isDanCode(9)).toBeFalsy(); // 1

    expect(isDanCode(99)).toBeTruthy(); // 2
    expect(isDanCode(999)).toBeTruthy(); // 3
    expect(isDanCode(9999)).toBeTruthy(); // 4
    expect(isDanCode(99999)).toBeTruthy(); // 5
    expect(isDanCode(999999)).toBeTruthy(); // 6
    expect(isDanCode(9999999)).toBeTruthy(); // 7
    expect(isDanCode(99999999)).toBeTruthy(); // 8

    expect(isDanCode(999999999)).toBeFalsy(); // 9
    expect(isDanCode(9999999999)).toBeFalsy(); // 10
    expect(isDanCode(99999999999)).toBeFalsy(); // 11
    expect(isDanCode(999999999999)).toBeFalsy(); // 12
    expect(isDanCode(9999999999999)).toBeFalsy(); // 13
    expect(isDanCode(99999999999999)).toBeFalsy(); // 14
    expect(isDanCode(999999999999999999999999999999)).toBeFalsy(); // 30
    expect(isDanCode(0.0)).toBeFalsy();
    expect(isDanCode(215.0)).toBeTruthy();
    expect(isDanCode(99.99)).toBeFalsy();
  });
});

describe("isEanCode", () => {
  test("isEanCode - string", () => {
    expect(isEanCode("    ")).toBeFalsy(); // 0
    expect(isEanCode("")).toBeFalsy(); // 0
    expect(isEanCode("0")).toBeFalsy(); // 1
    expect(isEanCode("9")).toBeFalsy(); // 1
    expect(isEanCode("99")).toBeFalsy(); // 2
    expect(isEanCode("999")).toBeFalsy(); // 3
    expect(isEanCode("9999")).toBeFalsy(); // 4
    expect(isEanCode("99999")).toBeFalsy(); // 5

    expect(isEanCode("999999")).toBeTruthy(); // 6
    expect(isEanCode("9999999")).toBeTruthy(); // 7
    expect(isEanCode("99999999")).toBeTruthy(); // 8
    expect(isEanCode("999999999")).toBeTruthy(); // 9
    expect(isEanCode("9999999999")).toBeTruthy(); // 10
    expect(isEanCode("99999999999")).toBeTruthy(); // 11
    expect(isEanCode("999999999999")).toBeTruthy(); // 12
    expect(isEanCode("9999999999999")).toBeTruthy(); // 13

    expect(isEanCode("99999999999999")).toBeFalsy(); // 14
    expect(isEanCode("999999999999999999999999999999")).toBeFalsy(); // 30

    expect(isEanCode("0.0")).toBeFalsy();
    expect(isEanCode("215.0")).toBeFalsy();
    expect(isEanCode("99.99")).toBeFalsy();
    expect(isEanCode("aaa")).toBeFalsy();
    expect(isEanCode("AAA")).toBeFalsy();
    expect(isEanCode("aa999")).toBeFalsy();
  });

  test("isEanCode - number", () => {
    expect(isEanCode(0)).toBeFalsy(); // 1
    expect(isEanCode(9)).toBeFalsy(); // 1
    expect(isEanCode(99)).toBeFalsy(); // 2
    expect(isEanCode(999)).toBeFalsy(); // 3
    expect(isEanCode(9999)).toBeFalsy(); // 4
    expect(isEanCode(99999)).toBeFalsy(); // 5

    expect(isEanCode(999999)).toBeTruthy(); // 6
    expect(isEanCode(9999999)).toBeTruthy(); // 7
    expect(isEanCode(99999999)).toBeTruthy(); // 8
    expect(isEanCode(999999999)).toBeTruthy(); // 9
    expect(isEanCode(9999999999)).toBeTruthy(); // 10
    expect(isEanCode(99999999999)).toBeTruthy(); // 11
    expect(isEanCode(999999999999)).toBeTruthy(); // 12
    expect(isEanCode(9999999999999)).toBeTruthy(); // 13

    expect(isEanCode(99999999999999)).toBeFalsy(); // 14
    expect(isEanCode(999999999999999999999999999999)).toBeFalsy(); // 30

    expect(isEanCode(0.0)).toBeFalsy();
    expect(isEanCode(215.0)).toBeFalsy();
    expect(isEanCode(99.99)).toBeFalsy();
  });
});
