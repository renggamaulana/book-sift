import { expect, test } from "bun:test";
import { add, multiply  } from "../utils/math";

test("adds two numbers", () => {
    expect(add(2,5)).toBe(7);
});


test("multiplies two numbers", () => {
    expect(multiply(2,10)).toBe(20);
})
