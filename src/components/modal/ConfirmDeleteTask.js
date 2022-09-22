import React from "react";

export default function ConfirmDeleteTask(props) {
	const { setModal, projects, currProject, setProjects, target, setTarget } =
		props;

	const closeModal = () => {
		setTarget(-1);
		setModal("");
	};

	const deleteTask = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (target < 0) return;

		setProjects((prevProjects) => {
			const prevProjectsCopy = JSON.parse(JSON.stringify(prevProjects));
			prevProjectsCopy[currProject].tasks.splice(target, 1);
			console.log(prevProjectsCopy);
			return prevProjectsCopy;
		});

		closeModal();
	};

	return (
		<div className="confirm-task-deletion-modal active">
			<div className="modal-content">
				<h2 className="del-confirmation-msg">{`Are you sure you want to delete the task "${projects[currProject].tasks[target].title}"`}</h2>
				<div className="modal-buttons">
					<button
						type="button"
						onClick={closeModal}
						className="cancel-button"
					>
						Cancel
					</button>
					<button
						type="button"
						onClick={deleteTask}
						className="confirm-deletion-button"
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}
