import dom from './dom.js'
import account from './account.js'

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
            projectList.appendChild(projectDiv);
        });
    }

    const displayModal = () => {
        dom.modal.classList.add('active-block');
    }
    const removeModal = () => {
        dom.modal.classList.remove('active-block');
    }

    const displayAddProject = () => {
        displayModal();
        dom.addProjectModal.classList.add('active-flex')
    }

    const removeAddProject = () => {
        removeModal();
        dom.addProjectForm.reset();
        dom.addProjectModal.classList.remove('active-flex');
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

    return {
        refreshProjects,
        displayAddProject, removeAddProject, displayProjectNameError
    }
}

export default displayController();