// Task list helpers for tasks.html.
export function openCount(tasks) {
  return tasks.filter(task => !task.done).length;
}

export function addTask(tasks, title) {
  return [...tasks, { id: tasks.length + 1, title, done: false }];
}

export function duplicateTask(tasks, id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return tasks;

  const nextId = Math.max(0, ...tasks.map(task => task.id)) + 1;
  const duplicate = { ...tasks[index], id: nextId };
  return [...tasks.slice(0, index + 1), duplicate, ...tasks.slice(index + 1)];
}
