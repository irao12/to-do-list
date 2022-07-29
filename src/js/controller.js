import project from './project.js'
import task from './task.js'
import dom from './dom.js'
import account from './account.js'
import displayController from './display.js'

const controller = () => {
    const isValidProjectName = () => {
        // if name is empty, thje result will be "" which is not truthy
        return dom.projectNameInput.value;
    }

    dom.addProjectButton.addEventListener('click', () => {
        displayController.displayAddProject();
    });

    dom.cancelProjectButton.addEventListener('click', ()=> {
        displayController.removeAddProject();
    });

    dom.confirmProjectButton.addEventListener('click', ()=>{
        if(isValidProjectName()){
            const projectName = dom.projectNameInput.value;
            const currProject = project(projectName);
            account.addProject(currProject);
            displayController.removeAddProject();
            displayController.refreshProjects();
        }
        else {
            displayController.displayProjectNameError();
        }
    });
}

export default controller();
