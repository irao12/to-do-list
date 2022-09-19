import React from "react";

export default function ConfirmDeleteProject(props) {
	const {
		setModal,
		currProject,
		setCurrProject,
		target,
		setTarget,
		projects,
		setProjects,
	} = props;

	const closeModal = () => {
		setModal("");
		setTarget(null);
	};

	// deletes the targeted project
	const deleteProject = () => {
		// do not do anything if there isn't a target
		if (target === -1) return;

		// remove the project froms the projects state
		setProjects((prevProjects) => {
			const firstHalf = prevProjects.slice(0, target);
			const secondHalf = prevProjects.slice(target + 1);
			console.log(secondHalf);

			return firstHalf.concat(secondHalf);
		});

		// if the current project was the target, change the currProject state
		if (currProject === target) setCurrProject(-1);

		closeModal();
	};

	return (
		<div className="confirm-project-deletion-modal active">
			<div className="modal-content">
				<h2 className="del-confirmation-msg">
					{`Are you sure you want to delete the project "${projects[target].title}"`}
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
