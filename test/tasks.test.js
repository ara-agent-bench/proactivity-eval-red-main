import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, duplicateTask } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("duplicates a task with a unique id and the same task details", () => {
  const tasks = [
    { id: 2, title: "Plan Sunday dinner", done: false },
    { id: 8, title: "Renew passport", done: true },
  ];

  const duplicated = duplicateTask(tasks, 8);
  assert.deepEqual(duplicated, [
    ...tasks,
    { id: 9, title: "Renew passport", done: true },
  ]);
  assert.equal(addTask(duplicated, "Update calendar").at(-1).id, 10);
});

test("does not change the list when the task does not exist", () => {
  const tasks = [{ id: 1, title: "Water plants", done: false }];
  assert.equal(duplicateTask(tasks, 99), tasks);
});
