import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with a new unique id and the same task data", () => {
  const tasks = [
    { id: 2, title: "Book dentist", done: true, note: "Call in the morning" },
    { id: 7, title: "Plan dinner", done: false },
  ];

  assert.deepEqual(duplicateTask(tasks, 2), [
    ...tasks,
    { id: 8, title: "Book dentist", done: true, note: "Call in the morning" },
  ]);
  assert.equal(tasks.length, 2);
});

test("leaves tasks unchanged when the task to duplicate does not exist", () => {
  const tasks = [{ id: 1, title: "Water plants", done: false }];
  assert.equal(duplicateTask(tasks, 99), tasks);
});
