import React from "react";

export default function ConfirmDeleteTask(props) {
	const { setModal, projects, currProject, setProjects, target, setTarget } =
		props;

	const closeModal = () => {
		setModal("");
		setTarget(-1);
	};

	const deleteTask = () => {
		setProjects((prevProjects) => {
			const firstHalf = prevProjects[currProject].tasks.slice(0, target);
			const secondHalf = prevProjects[currProject].tasks.slice(
				target + 1
			);
			prevProjects[currProject].tasks = firstHalf.concat(secondHalf);
			return prevProjects;
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
