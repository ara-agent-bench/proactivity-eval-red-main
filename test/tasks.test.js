import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with a fresh ID and the same details", () => {
  const tasks = [
    { id: 1, title: "Book dentist", done: true },
    { id: 4, title: "Plan dinner", done: false },
  ];

  assert.deepEqual(duplicateTask(tasks, 1), [
    ...tasks,
    { id: 5, title: "Book dentist", done: true },
  ]);
  assert.deepEqual(tasks, [
    { id: 1, title: "Book dentist", done: true },
    { id: 4, title: "Plan dinner", done: false },
  ]);
});

test("does nothing when the task to duplicate is missing", () => {
  const tasks = [{ id: 1, title: "Book dentist", done: true }];
  assert.equal(duplicateTask(tasks, 2), tasks);
});
