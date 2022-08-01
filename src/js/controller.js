import project from './project.js'
import task from './task.js'
import dom from './dom.js'
import account from './account.js'
import displayController from './display.js'
import {endOfToday} from 'date-fns'

const controller = () => {
    const formatDate = (date) => {
        // date is originally in YYYY-MM-DD format
        const dateArray = date.split("-");
        // dateArray = ['YYYY', 'MM', 'DD]
        // move the YYYY to the end and join the elements 
        // to create the formatted date
        dateArray.push(dateArray.shift());
        return dateArray.join('-');
    }

    const isValidProjectTitle = () => {
        // if title is empty, thje result will be "" which is not truthy
        return dom.projectTitleInput.value;
    }

    const isValidTaskTitle = () => {
        // if title is empty, thje result will be "" which is not truthy
        return dom.taskTitleInput.value;
    }

    const isValidTaskDate = () => {
        // if the user opted to not include a due date, return true
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
            //create a new project with the title
            const currProject = project(projectTitle);
            account.addProject(currProject);

            displayController.removeAddProject();
            displayController.refreshProjects();

            const currAccProject = account.getCurrProject();
            // if the account does not have a project selected yet,
            // set the new project as the selecte done
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

            let formattedDate;
            // if the user inputted a date, format it
            if (dom.taskDueDateInput.value) {
                formattedDate = formatDate(dom.taskDueDateInput.value);
            }
            // set the due date as a Date Object referring to the end of the day
            // set the due date as "" if no due date was inputted
            const taskDueDate = dom.taskDueDateInput.value ? 
                                endOfToday(new Date(formattedDate)) : "";

            const taskPriority = dom.taskPriorityInput.value;

            const currTask = task(taskTitle, taskDesc, taskDueDate, taskPriority);

            const currProject = account.getCurrProject();

            currProject.addTask(currTask);
            currProject.sortTasks();
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
