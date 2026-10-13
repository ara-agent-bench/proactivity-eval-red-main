import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task after the original with a fresh id", () => {
  const tasks = [
    { id: 2, title: "Plan dinner", done: true },
    { id: 7, title: "Renew passport", done: false },
  ];

  assert.deepEqual(duplicateTask(tasks, 2), [
    { id: 2, title: "Plan dinner", done: true },
    { id: 8, title: "Plan dinner", done: true },
    { id: 7, title: "Renew passport", done: false },
  ]);
});

test("returns the task list unchanged when the id is not found", () => {
  const tasks = [{ id: 2, title: "Plan dinner", done: false }];
  assert.equal(duplicateTask(tasks, 99), tasks);
});
