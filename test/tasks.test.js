import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with a new id and the same title and status", () => {
  const tasks = [
    { id: 2, title: "Plan dinner", done: true },
    { id: 7, title: "Renew passport", done: false },
  ];

  assert.deepEqual(duplicateTask(tasks, 2), [
    ...tasks,
    { id: 8, title: "Plan dinner", done: true },
  ]);
});

test("leaves the task list unchanged when the task is missing", () => {
  const tasks = [{ id: 1, title: "Water plants", done: false }];
  assert.equal(duplicateTask(tasks, 99), tasks);
});
