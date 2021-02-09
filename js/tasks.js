import TaskItem from './TaskItem.js'

const loadTaskView = ({id, complete, task}) => {
  return `<task-item data-id="${id}" data-complete="${complete}" data-task="${task}"></task-item>`
}

// A function that will build an entire list based on an Array of data
export const renderList = (taskAr) => {
  document.getElementById(`tasks`).innerHTML = taskAr.map(loadTaskView).join('\n')
}
