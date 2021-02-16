// Define the newTask class for the <new-task> Element
export default class newTask extends HTMLElement {


	constructor(theListElement) {
		super() // Extend the properties and methods of an HTMLElement
    
		// Shadow DOM (the element)
		this.root = this.attachShadow({mode: `open`})
			
		// Apply HTML content
        const eleItem = document.createElement(`form`)
        eleItem.setAttribute(`name`, `newtask`)
        
        const eleInput = document.createElement(`input`)
        eleInput.setAttribute(`type`, `text`)
        eleInput.setAttribute(`name`, `taskname`) 
        eleItem.appendChild(eleInput)

        const eleBtn = document.createElement(`button`)
        eleBtn.setAttribute(`type`, `submit`)
        eleBtn.textContent = 'Add'
        eleBtn.addEventListener(`click`, (event) => {
            event.preventDefault();
            console.log(`submit clicked`)
            theListElement.addNewTask(eleInput.value)
		})
        eleItem.appendChild(eleBtn)
		
		this.root.appendChild(eleItem)
	}
}

// Add a <new-task> CUSTOM element
window.customElements.define(`new-task`, newTask)
