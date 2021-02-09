import {getJsonData} from './fetch.js'
import {renderList} from './tasks.js'
import TaskItem from './TaskItem.js'

// ONLY when the interface is loaded, do we go and look for data and render
window.addEventListener(`load`, (event) => {

  // Go get some data! (Assume some "await" time)
  const todoList = getJsonData(`http://whatever.com/tasks`)

  // Pass the array of data, build the UI
  renderList(todoList)
})



/* 

1:45 - Start working on the shared doc instructions
2:15 - Breakout groups of 3 people (randomly assigned), continuing to work, now with a partner or two. Rocco will check in on you.
2:45 - Regroup as a class and solve
3:15 - Class complete

*/






























/*
- Order by priority and completeness

Reminder:
- Compare then() to async/await
- Destructuring
*/