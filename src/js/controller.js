import './project.js'
import './task.js'
import displayController from './display.js'

const controller = () => {
    const addProjectButton = document.querySelector('.add-project');

    addProjectButton.addEventListener('click', () => {
        displayController.displayAddProject();
    });

}

export default controller();
