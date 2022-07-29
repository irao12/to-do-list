const displayController = () => {
    // elements
    const modal = document.querySelector('.modal');
    const addProjectModal = document.querySelector('.addProjectModal')

    // methods
    const displayModal = () => {
        modal.classList.add('active-block');
    }
    const removeModal = () => {
        modal.classList.remove('active-block');
    }

    const displayAddProject = () => {
        displayModal();
        addProjectModal.classList.add('active-flex')
    }

    const removeAddProject = () => {
        removeModal();
        addProjectModal.classList.remove('active-flex')
    }

    return {
        displayAddProject
    }
}

export default displayController();