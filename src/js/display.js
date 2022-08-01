import dom from './dom.js'
import account from './account.js'
import task from './task.js';

import {format, isPast, isToday, isThisWeek, isThisYear} from 'date-fns';

const displayController = () => {

    // methods
    const refreshProjects = () => {
        const projects = account._myProjects;
        const projectList = dom.projectList;
        projectList.innerHTML = '';
        projects.forEach((project)=>{
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project-div');


            const projectTitle = document.createElement('h2');
            projectTitle.textContent = project.getTitle();

            projectDiv.appendChild(projectTitle);

            projectDiv.addEventListener('click', ()=>{
                account.setCurrProject(project)
                refreshTasks();
            });
            projectList.appendChild(projectDiv);
        });
    }

    const displayTask = (task) => {
        const taskList = dom.taskList;
        const newTask = document.createElement('div');
        newTask.classList.add('task-div');
        const taskTitle = document.createElement('h2');
        taskTitle.textContent = task.getTitle();

        const details = document.createElement('div');
        details.classList.add('task-details');

        details.appendChild(taskTitle);

        if (task.getDueDate()){
            const taskDueDate = task.getDueDate();
            let taskDueDateText;
            
            // If the date is in the past, show overdue
            if (isPast(taskDueDate)) {
                taskDueDateText = "Overdue";
            }
            // if the date is today, show today
            else if (isToday(taskDueDate)) 
                taskDueDateText = "Today";
            // if the date is in the current week, show the weekday
            else if (isThisWeek(taskDueDate))
                taskDueDateText = format(task.getDueDate(), 'EEEE');
            // if the date is in the current year, show the month and day
            else if (isThisYear(taskDueDate))
                taskDueDateText = format(task.getDueDate(), 'MMM dd');
            // otherwise, show the full date
            else {
                taskDueDateText = format(task.getDueDate(), 'MMM dd yyyy');
            }

            const dueDate = document.createElement('h3');
            dueDate.textContent = taskDueDateText;
            details.appendChild(dueDate);
        }        

        newTask.appendChild(details);
        taskList.appendChild(newTask);
    }

    const refreshTasks = () => {
        const currProject = account.getCurrProject();
        const taskList = dom.taskList;
        taskList.textContent = '';

        if (currProject) {
            const taskList = currProject.getList();
            taskList.forEach(displayTask);
        }

        const addNewTask = document.createElement('div');
        addNewTask.classList.add('add-new-task');

        const addTaskText = document.createElement('h2');
        addTaskText.textContent = 'Add task';
        addTaskText.classList.add('add-task-text');
        const addTaskButton = document.createElement('div');
        addTaskButton.classList.add('add-task-button');
        addTaskButton.textContent ='+';
        
        addNewTask.appendChild(addTaskButton);
        addNewTask.appendChild(addTaskText);
        addNewTask.addEventListener('click', displayAddTask);
        taskList.appendChild(addNewTask);
    }

    const displayModal = () => {
        dom.modal.classList.add('active');
    }
    const removeModal = () => {
        dom.modal.classList.remove('active');
    }

    const displayAddProject = () => {
        displayModal();
        dom.addProjectModal.classList.add('active')
    }

    const removeAddProject = () => {
        removeModal();
        dom.addProjectForm.reset();
        dom.addProjectModal.classList.remove('active');
        if (document.querySelector('.error')){
            dom.taskTitleInput.classList.remove('invalid');
            document.querySelector('.error').remove();
        }
    }

    const displayProjectTitleError = () => {
        const projectTitleInput = dom.projectTitleInput;
        projectTitleInput.classList.add('invalid');
        if (!document.querySelector('.error')){
            const error = document.createElement('div');
            error.classList.add('error');
            error.textContent = 'Please enter a title';
            dom.projectTitleFormSection.appendChild(error);
        }
    }

    const displayTaskTitleError = () => {
        const taskTitleInput = dom.taskTitleInput;
        taskTitleInput.classList.add('invalid');
        if (!document.querySelector('.task-title-section .error')){
            const error = document.createElement('div');
            error.classList.add('error');
            error.textContent = 'Please enter a title';
            dom.taskTitleFormSection.appendChild(error);
        }
    }

    const removeTaskTitleError = () => {
        if (document.querySelector('.task-title-section .error')){
            dom.taskTitleInput.classList.remove('invalid');
            document.querySelector('.task-title-section .error').remove();
        }
    }

    const displayTaskDateError = () => {
        const taskDateInput = dom.taskDueDateInput;
        taskDateInput.classList.add('invalid');
        if (!document.querySelector('.task-due-date-section .error')){
            const error = document.createElement('div');
            error.classList.add('error');
            error.textContent = 'Please enter a valid date';

            dom.taskDueDateFormSection.insertBefore(error, dom.taskToggleDueDate);
        }
    }

    const removeTaskDateError = () => {
        if (document.querySelector('.task-due-date-section .error')){
            dom.taskDueDateInput.classList.remove('invalid');
            document.querySelector('.task-due-date-section .error').remove();
        }
    }

    const displayAddTask = () => {
        displayModal();
        dom.addTaskModal.classList.add('active');
    }

    const removeAddTask = () => {
        removeModal();
        dom.addTaskForm.reset();
        dom.addTaskModal.classList.remove('active');
        
        removeTaskTitleError();
        removeTaskDateError();

        dom.taskToggleDueDate.textContent = "Remove Due Date";
        dom.taskDueDateInput.classList.remove('inactive')
    }

    return {
        refreshProjects, refreshTasks,
        displayAddProject, removeAddProject, displayProjectTitleError,
        displayAddTask, removeAddTask, displayTaskTitleError, displayTaskDateError,
        removeTaskDateError, removeTaskTitleError
    }
}

export default displayController();