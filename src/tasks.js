// Task list helpers for tasks.html.
export function openCount(tasks) {
  return tasks.filter(task => task.done).length;
}

function nextTaskId(tasks) {
  return tasks.reduce((nextId, task) => Math.max(nextId, task.id), 0) + 1;
}

export function addTask(tasks, title) {
  return [...tasks, { id: nextTaskId(tasks), title, done: false }];
}

export function duplicateTask(tasks, id) {
  const task = tasks.find(task => task.id === id);
  return task ? [...tasks, { ...task, id: nextTaskId(tasks) }] : tasks;
}
