import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with its state and a fresh id", () => {
  const tasks = [
    { id: 2, title: "Plan Sunday dinner", done: false },
    { id: 8, title: "Renew passport", done: true },
  ];

  assert.deepEqual(duplicateTask(tasks, 8), [
    ...tasks,
    { id: 9, title: "Renew passport", done: true },
  ]);
  assert.equal(tasks.length, 2);
});

test("does not change tasks when the requested task does not exist", () => {
  const tasks = [{ id: 1, title: "Water plants", done: false }];
  assert.equal(duplicateTask(tasks, 99), tasks);
});
