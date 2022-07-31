import project from './project.js'
import task from './task.js'
import dom from './dom.js'
import account from './account.js'
import displayController from './display.js'

const controller = () => {

    const isValidProjectTitle = () => {
        // if title is empty, thje result will be "" which is not truthy
        return dom.projectTitleInput.value;
    }

    dom.addProjectButton.addEventListener('click', () => {
        displayController.displayAddProject();
    });

    dom.cancelProjectButton.addEventListener('click', ()=> {
        displayController.removeAddProject();
    });

    dom.confirmProjectButton.addEventListener('click', ()=>{
        if(isValidProjectTitle()){
            const projectTitle = dom.projectTitleInput.value;
            const currProject = project(projectTitle);
            account.addProject(currProject);
            displayController.removeAddProject();
            displayController.refreshProjects();
            const currAccProject = account.getCurrProject();
            if (!currAccProject) account.setCurrProject(currProject);
        }
        else {
            displayController.displayProjectTitleError();
        }
    });

    dom.cancelTaskButton.addEventListener('click', displayController.removeAddTask)
}

export default controller();
