import dom from './dom.js'
import account from './account.js'
import task from './task.js';

const displayController = () => {

    // methods
    const refreshProjects = () => {
        const projects = account._myProjects;
        const projectList = dom.projectList;
        projectList.innerHTML = '';
        projects.forEach((project)=>{
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project-div');
            projectDiv.textContent = project.getName();
            projectDiv.addEventListener('click', refreshTasks);
            projectList.appendChild(projectDiv);
        });
    }

    const displayTask = (task) => {
        const taskList = dom.taskList;
        const newTask = document.createElement('div');
        const taskTitle = document.createElement('h2');
        taskName.textContent = task.getTitle();
        newTask.appendChild(taskTitle);
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

        const addTaskButton = document.createElement('div');
        addTaskButton.classList.add('add-task-button');
        const addTaskText = document.createElement('div');
        addTaskText.classList.add('add-task-text');
        addTaskButton.textContent ='+';
        addTaskText.textContent = 'Add task';

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
            dom.projectNameInput.classList.remove('invalid');
            document.querySelector('.error').remove();
        }
    }

    const displayProjectNameError = () => {
        const projectNameInput = dom.projectNameInput;
        projectNameInput.classList.add('invalid');
        if (!document.querySelector('.error')){
            const error = document.createElement('div');
            error.classList.add('error');
            error.textContent = 'Please enter a name';
            dom.projectNameFormSection.appendChild(error);
        }
    }

    const displayAddTask = () => {
        displayModal();
        dom.addTaskModal.classList.add('active');
    }

    const removeAddTask = () => {
        removeModal();
        dom.addTaskModal.classList.remove('active');
    }

    return {
        refreshProjects, refreshTasks,
        displayAddProject, removeAddProject, displayProjectNameError,
        displayAddTask, removeAddTask
    }
}

export default displayController();