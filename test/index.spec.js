import { expect } from "chai";
import sayHelloWorld from "../src/index";

describe("index test", () => {
  describe("sayHelloWorld function", () => {
    it("should say Hello world!", () => {
      const str = sayHelloWorld();
      expect(str).to.equal("Hello world!");
    });
  });
});
