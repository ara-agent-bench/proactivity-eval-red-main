// Task list helpers for tasks.html.
export function openCount(tasks) {
  return tasks.filter(task => !task.done).length;
}

export function addTask(tasks, title) {
  return [...tasks, { id: tasks.length + 1, title, done: false }];
}

export function duplicateTask(tasks, taskId) {
  const task = tasks.find(item => item.id === taskId);
  if (!task) return tasks;

  const id = Math.max(0, ...tasks.map(item => item.id)) + 1;
  return [...tasks, { ...task, id }];
}
