import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task as a new open task with a unique id", () => {
  const tasks = [
    { id: 1, title: "Book dentist", done: true },
    { id: 4, title: "Plan dinner", done: false },
  ];

  assert.deepEqual(duplicateTask(tasks, 1), [
    ...tasks,
    { id: 5, title: "Book dentist", done: false },
  ]);
  assert.equal(tasks.length, 2);
});

test("does not change tasks when the requested task is missing", () => {
  const tasks = [{ id: 2, title: "Plan dinner", done: false }];
  assert.equal(duplicateTask(tasks, 99), tasks);
});
