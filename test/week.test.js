import { test } from "node:test";
import assert from "node:assert/strict";
import { weekRange } from "../src/week.js";

test("labels the week with an en dash", () => {
  assert.equal(weekRange(new Date("2026-01-05T00:00:00Z")), "Jan 5 – Jan 11");
});
