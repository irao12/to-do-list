import React from "react";

export default function ConfirmDeleteProject(props) {
	const {
		setModal,
		currProject,
		setCurrProject,
		target,
		setTarget,
		setProjects,
	} = props;

	const closeModal = () => {
		setModal("");
	};

	// deletes the targeted project
	const deleteProject = () => {
		// do not do anything if there isn't a target
		if (target === null) return;

		// remove the project from the projects state
		setProjects((prevProjects) => {
			const index = prevProjects.indexOf(target);
			const firstHalf = prevProjects.slice(0, index);
			const secondHalf = prevProjects.slice(index + 1);

			return firstHalf.concat(secondHalf);
		});

		// if the current project was the target, change the currProject state
		if (currProject === target) setCurrProject(null);

		setTarget(null);

		closeModal();
	};

	return (
		<div className="confirm-project-deletion-modal active">
			<div className="modal-content">
				<h2 className="del-confirmation-msg">
					{`Are you sure you want to delete the project`}
				</h2>
				<div className="modal-buttons">
					<button
						onClick={closeModal}
						type="button"
						className="cancel-button"
					>
						Cancel
					</button>
					<button
						onClick={deleteProject}
						type="button"
						className="confirm-deletion-button"
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}
