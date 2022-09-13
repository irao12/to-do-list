import React, { useState } from "react";

export default function AddProject(props) {
	const { setModal, projects, setProjects } = props;

	const [titleInput, setTitleInput] = useState("");
	const [showTitleError, setShowTitleError] = useState(false);

	const handleChange = (event) => {
		setTitleInput(event.target.value);
		if (isValidTitle(titleInput)) setShowTitleError(false);
	};

	const isValidTitle = (title) => {
		return titleInput.trim();
	};

	const addProject = () => {
		if (!isValidTitle(titleInput)) {
			setShowTitleError(true);
		} else {
			const newProject = {
				title: titleInput,
				tasks: [],
			};
			setProjects([...projects, newProject]);
			setModal("");
		}
	};

	return (
		<div className="add-project-modal active">
			<div className="modal-content">
				<div className="modal-header">
					<h1>Add a project</h1>
				</div>
				<div className="modal-body">
					<form className="add-project-form" onSubmit={() => false}>
						<div className="form-div">
							<div className="form-section project-title-section">
								<label htmlFor="project-title-input">
									Title
								</label>
								<br />
								<input
									type="text"
									id="project-title-input"
									maxLength="20"
									onChange={handleChange}
									value={titleInput}
									className={showTitleError ? "invalid" : ""}
								/>
								{showTitleError && (
									<div className="error">
										Please enter a title
									</div>
								)}
							</div>

							<div className="modal-buttons">
								<button
									className="cancel-button"
									type="button"
									onClick={() => setModal("")}
								>
									Cancel
								</button>
								<button
									className="confirm-project-button"
									type="button"
									onClick={addProject}
								>
									Add project
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
