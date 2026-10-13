// Task list helpers for tasks.html.
export function openCount(tasks) {
  return tasks.filter(task => !task.done).length;
}

export function addTask(tasks, title) {
  return [...tasks, { id: tasks.length + 1, title, done: false }];
}

export function duplicateTask(tasks, id) {
  const task = tasks.find(task => task.id === id);
  if (!task) return tasks;

  const nextId = tasks.reduce((maxId, task) => Math.max(maxId, Number(task.id) || 0), 0) + 1;
  return [...tasks, { ...task, id: nextId }];
}
