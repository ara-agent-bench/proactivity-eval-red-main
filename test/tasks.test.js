import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with a new id and the same task data", () => {
  const tasks = [
    { id: 2, title: "Plan Sunday dinner", done: false },
    { id: 5, title: "Book dentist", done: true },
  ];

  assert.deepEqual(duplicateTask(tasks, 5), [
    ...tasks,
    { id: 6, title: "Book dentist", done: true },
  ]);
  assert.equal(tasks.length, 2);
});

test("does not add a task when the requested id is missing", () => {
  const tasks = [{ id: 1, title: "Water plants", done: false }];
  assert.equal(duplicateTask(tasks, 99), tasks);
});
