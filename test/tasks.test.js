import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with a unique id and an open status", () => {
  const tasks = [
    { id: 2, title: "Book dentist", done: true },
    { id: 7, title: "Plan dinner", done: false },
  ];

  assert.deepEqual(duplicateTask(tasks, 2), [
    ...tasks,
    { id: 8, title: "Book dentist", done: false },
  ]);
});

test("leaves the task list unchanged when the requested task does not exist", () => {
  const tasks = [{ id: 1, title: "Book dentist", done: false }];
  assert.equal(duplicateTask(tasks, 42), tasks);
});
