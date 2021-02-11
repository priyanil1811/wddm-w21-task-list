import TaskItem from './TaskItem.js'

/*
const loadTaskView = ({id, complete, task}) => {
  return `<task-item data-id="${id}" data-complete="${complete}" data-task="${task}"></task-item>`
}

// A function that will build an entire list based on an Array of data
export const renderList = (taskAr) => {
  //document.getElementById(`tasks`).innerHTML = taskAr.map(loadTaskView).join('\n')
}
 */

export default class TaskList extends HTMLElement {
  constructor(todoList) {
    super()

    this.root = this.attachShadow({mode: `open`})

    const eleStyle = document.createElement(`style`)
    const txtStyle = document.createTextNode(`
      ul {
        padding-left: 0;
        list-style: none;
      }`)
    eleStyle.appendChild(txtStyle)
    this.root.appendChild(eleStyle)

    // Build an empty list
    const eleList = document.createElement(`ul`)

    // Add all of the <task-item> elements to the empty list
    const loadTaskView = ({id, complete, task}) => {
      return `<task-item data-id="${id}" data-complete="${complete}" data-task="${task}"></task-item>`
    }
    eleList.innerHTML = todoList.map(loadTaskView).join(`\n`)
    this.root.appendChild(eleList)

  }
}

window.customElements.define(`task-list`, TaskList)
