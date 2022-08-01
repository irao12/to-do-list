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

    const isValidTaskTitle = () => {
        return dom.taskTitleInput.value;
    }

    const isValidTaskDate = () => {
        if (dom.taskDueDateInput.classList.contains('inactive'))
            return true;
            
        const dueDate = new Date(dom.taskDueDateInput.value);
        if (dueDate !='Invalid Date') return true;
        return false;
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

    dom.confirmTaskButton.addEventListener('click', ()=>{
        if (isValidTaskTitle() && isValidTaskDate()) {
            const taskTitle = dom.taskTitleInput.value;
            const taskDesc = dom.taskDescInput.value;
            const taskDueDate = dom.taskDueDateInput.value ? 
                                new Date(dom.taskDueDateInput.value) : "";
            const taskPriority = dom.taskPriorityInput.value;

            const currTask = task(taskTitle, taskDesc, taskDueDate, taskPriority);

            const currProject = account.getCurrProject();

            currProject.addTask(currTask);
            displayController.removeAddTask();
            displayController.refreshTasks();
        }
        else {
            if (!isValidTaskTitle())
                displayController.displayTaskTitleError();
            else {
                displayController.removeTaskTitleError();
            }

            if (!isValidTaskDate()){
                displayController.displayTaskDateError();
            }
            else {
                displayController.removeTaskDateError();
            }
        }
    });

    dom.taskToggleDueDate.addEventListener('click', () => {
        const toggleButton = dom.taskToggleDueDate;
        if (toggleButton.textContent === 'Remove Due Date'){
            toggleButton.textContent = 'Add Due Date';
            dom.taskDueDateInput.value = '';
            dom.taskDueDateInput.classList.add('inactive');
        }
        else if (toggleButton.textContent === 'Add Due Date') {
            toggleButton.textContent = 'Remove Due Date';
            dom.taskDueDateInput.classList.remove('inactive');
        }
    });
}

export default controller();
