import './project.js'
import './task.js'
import displayController from './display.js'

const controller = () => {
    const addProject = document.querySelector('.add-project');
    addProject.addEventListener('click', () => {
        displayController.displayModal();
    });
}

export default controller();
