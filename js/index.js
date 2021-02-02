const todoList = [
  {
    "id": 1,
    "task": "Complete this example",
    "complete": false 
  }, {
    "id": 2,
    "task": "Order groceries",
    "complete": true 
  }, {
    "id": 3,
    "task": "Learn about Web Components",
    "complete": false 
  }
]


const loadTaskView = (task) => {
  return `
    <li>
			<input type="checkbox" id="task${task.id} name="todoItem" ${(task.complete) ? `checked` : ``}>
			<label for="task${task.id}" class="task">${task.task}</label>
		</li>`
}

// A function that will build an entire list based on an Array of data
const renderList = (taskAr) => {
  document.getElementById(`tasks`).innerHTML = taskAr.map(loadTaskView).join('\n')
}

// Pass the array of data, build the UI
renderList(todoList)














/*
- Order by priority and completeness

Reminder:
Compare then() to async/await

*/