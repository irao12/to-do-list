const displayController = () => {
    const modal = document.querySelector('.modal');
    const displayModal = () => {
        modal.classList.add('active-block');
    }
    const removeModal = () => {
        modal.classList.remove('active-block');
    }

    return {
        displayModal, removeModal
    }
}

export default displayController();