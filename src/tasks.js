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

  const nextId = Math.max(0, ...tasks.map(task => task.id)) + 1;
  return [...tasks, { ...task, id: nextId }];
}
