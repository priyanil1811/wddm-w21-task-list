// Define the TaskItem class for the <task-item> Element
export default class TaskItem extends HTMLElement {
	constructor() {
		super() // Extend the properties and methods of an HTMLElement
    
    console.log(`Is complete?`, this.dataset.complete, this.getAttribute(`data-complete`))


		// Shadow DOM (the element)
		this.root = this.attachShadow({mode: `open`})
		
		// Apply CSS styling
		const eleStyle = document.createElement(`style`)
		const txtStyle = document.createTextNode(`
				.task {
					display: block;
					background-color: #fff;
					padding: 0.5em;
					border: 1px solid #666;
				}
				[type="checkbox"] {
				  display: none;
				}
				[type="checkbox"]:checked + .task {
					text-decoration: line-through;
					background-color: #eee;
					color: #666;
				}
				[type="checkbox"]:not(:checked) + .task {
					counter-increment: todo-items;
				}`)
		eleStyle.appendChild(txtStyle)
		this.root.appendChild(eleStyle)
		
		
		// Apply HTML content
		const eleItem = document.createElement(`li`)
		
		const eleInput = document.createElement(`input`)
		eleInput.setAttribute(`type`, `checkbox`)
		eleInput.setAttribute(`id`, `taskX`) 
		eleInput.setAttribute(`name`, `taskX`) 
		eleInput.setAttribute(`checked`, `checked`)
		eleInput.addEventListener(`change`, (event) => {
			console.log(`check`)
		})
		eleItem.appendChild(eleInput)
		
		const eleLabel = document.createElement(`label`)
		eleLabel.setAttribute(`for`, `taskX`)
		eleLabel.setAttribute(`class`, `task`)
		eleLabel.textContent = this.textContent
		eleItem.appendChild(eleLabel)
		
		this.root.appendChild(eleItem)
	}
}

// Add a <task-item> CUSTOM element
window.customElements.define(`task-item`, TaskItem)