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



export const getJsonData = (url) => {
  // Pretend we fetched this data
  // fetch(url, blah blah blah)

  return todoList
}