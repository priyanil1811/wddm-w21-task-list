import {getJsonData} from './fetch.js'
import {renderList} from './tasks.js'


// ONLY when the interface is loaded, do we go and look for data and render
window.addEventListener(`load`, (event) => {

  // Go get some data! (Assume some "await" time)
  const todoList = getJsonData(`http://whatever.com/tasks`)

  // Pass the array of data, build the UI
  renderList(todoList)
})



// Before Thurs:
// - Turn tasks.js into TaskList.js (a Web Component)
// - Write an "interface" to update the todoList
// - Add a `change` listener to the TaskItem
// - Call the new "update" interface when a TaskItem has updated
// - Update the Array of data

// Think about:
// - Build a TaskItem using the class name, instead of the HTML item
// - Have the TaskList know when one of it's TaskItems has changed









/*
- Order by priority and completeness

Reminder:
- Compare then() to async/await
- Destructuring
*/