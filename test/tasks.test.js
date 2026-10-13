import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with a fresh ID and the same task data", () => {
  const tasks = [
    { id: 2, title: "Plan dinner", done: false },
    { id: 7, title: "Renew passport", done: true },
  ];

  assert.deepEqual(duplicateTask(tasks, 7), [
    ...tasks,
    { id: 8, title: "Renew passport", done: true },
  ]);
  assert.equal(tasks.length, 2);
});

test("does not change the task list when the ID is unknown", () => {
  const tasks = [{ id: 1, title: "Water plants", done: false }];

  assert.equal(duplicateTask(tasks, 99), tasks);
});
