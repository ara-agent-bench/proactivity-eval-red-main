// Task list helpers for tasks.html.
export function openCount(tasks) {
  return tasks.filter(task => task.done).length;
}

function nextTaskId(tasks) {
  return Math.max(0, ...tasks.map(task => task.id)) + 1;
}

export function addTask(tasks, title) {
  return [...tasks, { id: nextTaskId(tasks), title, done: false }];
}

export function duplicateTask(tasks, taskId) {
  const task = tasks.find(task => task.id === taskId);
  if (!task) return tasks;
  return [...tasks, { ...task, id: nextTaskId(tasks) }];
}
