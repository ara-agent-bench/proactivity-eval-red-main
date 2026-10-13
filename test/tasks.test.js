import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with a fresh id and open status", () => {
  const tasks = [
    { id: 2, title: "Plan Sunday dinner", done: true },
    { id: 7, title: "Renew passport", done: false },
  ];

  assert.deepEqual(duplicateTask(tasks, 2), [
    ...tasks,
    { id: 8, title: "Plan Sunday dinner", done: false },
  ]);
});

test("does not change tasks when the duplicate id is missing", () => {
  const tasks = [{ id: 1, title: "Water plants", done: false }];

  assert.equal(duplicateTask(tasks, 99), tasks);
});
