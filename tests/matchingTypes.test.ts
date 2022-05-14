describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBeTruthy();
      expect(stringCheck('word')).toBeTruthy();
      expect(stringCheck('This is technically still a string')).toBeTruthy();
      expect(stringCheck(12345)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(08.31)).toBeTruthy();
      expect(numberCheck(2 + 5 )).toBeTruthy();
      expect(numberCheck("12345")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect(false).toBe(false);
      expect(booleanCheck(true)).toBeTruthy();
      expect(booleanCheck(10 > 5)).toBeTruthy();
      expect(booleanCheck(68493223)).toBeFalsy();
    });
  });

  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean"
  };
