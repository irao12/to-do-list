import dom from './dom.js'
import account from './account.js'
import task from './task.js';

import {format, isPast, isToday, isTomorrow, isThisWeek, isThisYear} from 'date-fns';
import project from './project.js';
import { el } from 'date-fns/locale';

const displayController = () => {
    // methods
    const displayModal = () => {
        dom.modal.classList.add('active');
    }
    const removeModal = () => {
        dom.modal.classList.remove('active');
    }

    const displayProject = (project) => {
        const projectList = dom.projectList;
        const projectDiv = document.createElement('div');
        projectDiv.project = project;
        projectDiv.classList.add('project-div');

        const projectTitleSection = document.createElement('div');
        projectTitleSection.classList.add('project-title-section');
        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.getTitle();

        projectTitleSection.appendChild(projectTitle);

        projectDiv.appendChild(projectTitleSection);

        projectTitleSection.addEventListener('click', ()=>{
            account.setCurrProject(project)
            refreshTasks();
        });
        
        //add a div for the delete button
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-project-button')
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';
        deleteButton.addEventListener('click', () => {
            displayConfirmProjectDeletion(projectDiv);
        });
        projectDiv.appendChild(deleteButton);

        projectList.appendChild(projectDiv);
    }

    const refreshProjects = () => {
        const projects = account._myProjects;
        const projectList = dom.projectList;
        projectList.innerHTML = '';
        projects.forEach(displayProject);
    }

    const removeProject = (confirmButton) => {
        account.removeProject(confirmButton.target.projectDiv.project);
        refreshProjects();
        refreshTasks();
        removeConfirmProjectDeletion();
    }

    const displayConfirmProjectDeletion = (projectDiv) => {
        displayModal();
        const projectDeletionModal = dom.confirmProjectDeletionModal;
        projectDeletionModal.classList.add('active');
        const message = dom.delConfirmationMessage;

        // edit the message to say the project name
        message.textContent = `Are you sure you want to delete the project "${projectDiv.project.getTitle()}"`;
        const confirmButton = dom.confirmProjectDeletionButton;

        //save the projectDiv in the button
        confirmButton.projectDiv = projectDiv;

        // remove any previous event listeners so multiple projects do not get deleted
        confirmButton.removeEventListener('click', removeProject);
        confirmButton.addEventListener('click', removeProject);
    }

    const removeConfirmProjectDeletion = () => {
        removeModal();
        dom.confirmProjectDeletionModal.classList.remove('active');
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

    const displayTaskDetails = (task) => {
        displayModal();
        const taskDetailsDiv = document.createElement('div');
        taskDetailsDiv.classList.add('task-details-modal');
        const taskDetailsContent = document.createElement('div');
        taskDetailsContent.classList.add('modal-content');
        // task title
        const taskTitle = document.createElement('h1');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = "Title: " + task.getTitle();
        // task description
        const taskDesc = document.createElement('p');
        taskDesc.classList.add('task-desc');
        taskDesc.textContent = "Description: " + task.getDesc();
        // task due date
        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        if (task.getDueDate()){
            taskDueDate.textContent = "Due: " + format(task.getDueDate(), 'MMM dd yyyy');
        }
        else {
            taskDueDate.textContent = "No Due Date";
        }
        // task priority
        const taskPriority = document.createElement('p');
        taskPriority.classList.add('task-priority');
        const priority = task.getPriority();
        if (priority === '0') taskPriority.textContent = "Priority: Low";
        else if (priority === '1') taskPriority.textContent = "Priority: Medium";
        else if (priority === '2') taskPriority.textContent = "Priority: High";


        const closeButton = document.createElement('div');
        closeButton.classList.add('task-close-button');
        closeButton.textContent = "X";
        closeButton.addEventListener('click', removeTaskDetails);

        taskDetailsContent.appendChild(closeButton)
        taskDetailsContent.appendChild(taskTitle);
        taskDetailsContent.appendChild(taskDesc);
        if (task.getDueDate())
            taskDetailsContent.appendChild(taskDueDate);
        taskDetailsContent.appendChild(taskPriority);
        
        taskDetailsDiv.appendChild(taskDetailsContent);

        dom.modal.appendChild(taskDetailsDiv);
    };

    const removeTaskDetails = () => {
        document.querySelector('.task-details-modal').remove();
        removeModal();
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
            else if (isTomorrow(taskDueDate)) 
                taskDueDateText = "Tomorrow";
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

        //add a div for the delete button
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-task-button')
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';

        newTask.task = task;

        deleteButton.addEventListener('click', () => {
            displayConfirmTaskDeletion(newTask);
        });

        details.addEventListener('click', ()=>{
            displayTaskDetails(task);
        });

        newTask.appendChild(details);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
    }

    const refreshTasks = () => {
        const currProject = account.getCurrProject();
        const taskList = dom.taskList;
        taskList.textContent = '';

        if (currProject) {
            const currtaskList = currProject.getList();
            currtaskList.forEach(displayTask);

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

    const removeTask = (confirmButton) => {
        account.getCurrProject().removeTask(confirmButton.target.task);
        refreshTasks();
        removeConfirmTaskDeletion();
    }

    const displayConfirmTaskDeletion = (taskDiv) => {
        displayModal();
        const taskDeletionModal = dom.confirmTaskDeletionModal;
        taskDeletionModal.classList.add('active');
        const message = dom.delTaskConfirmationMessage;

        // edit the message to say the project name
        message.textContent = `Are you sure you want to delete the task "${taskDiv.task.getTitle()}"`;
        const confirmButton = dom.confirmTaskDeletionButton;

        //save the projectDiv in the button
        confirmButton.task = taskDiv.task;

        // remove any previous event listeners so multiple projects do not get deleted
        confirmButton.removeEventListener('click', removeTask);
        confirmButton.addEventListener('click', removeTask);
    }

    const removeConfirmTaskDeletion = () => {
        removeModal();
        dom.confirmTaskDeletionModal.classList.remove('active');
    }

    return {
        refreshProjects, refreshTasks,
        displayAddProject, removeAddProject, displayProjectTitleError,
        displayAddTask, removeAddTask, displayTaskTitleError, displayTaskDateError,
        removeTaskDateError, removeTaskTitleError, removeConfirmProjectDeletion, removeConfirmTaskDeletion
    }
}

export default displayController();