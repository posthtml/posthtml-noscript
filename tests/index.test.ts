import { test, expect } from "vitest";
import * as API from "../src";
import pkg from "../package.json";

test("Library dependencies", () => {
  expect(Object.keys(pkg.dependencies ?? {})).toMatchInlineSnapshot(`
    [
      "posthtml",
      "posthtml-parser",
    ]
  `);
});

test("API", () => {
  expect(Object.keys(API)).toMatchInlineSnapshot(`
    [
      "default",
      "noscript",
      "posthtmlNoscript",
    ]
  `);
});
