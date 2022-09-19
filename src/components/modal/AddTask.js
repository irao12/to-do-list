import React, { useState } from "react";
import { isValid } from "date-fns";

export default function AddTask(props) {
	const { setModal, setProjects, currProject } = props;

	const [isDateAdded, setIsDateAdded] = useState(true);

	const [formData, setFormData] = useState({
		title: "",
		desc: "",
		dueDate: "",
		priority: "",
	});

	const [showTitleError, setShowTitleError] = useState(false);
	const [showDateError, setShowDateError] = useState(false);

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const closeModal = () => {
		setModal("");
	};

	const toggleIsDateAdded = () => {
		setIsDateAdded((prevIsDateAdded) => !prevIsDateAdded);
		if (formData.dueDate !== "")
			setFormData((prevFormData) => {
				return {
					...prevFormData,
					dueDate: "",
				};
			});
		if (showDateError) setShowDateError(false);
	};

	const isValidTitle = () => {
		return formData.title.trim();
	};

	const isValidForm = (inputDate) => {
		let result = true;

		if (!isValidTitle()) {
			setShowTitleError(true);
			result = false;
		} else if (showTitleError) setShowTitleError(false);

		if (isDateAdded && !isValid(inputDate)) {
			setShowDateError(true);
			result = false;
		} else if (showDateError) setShowDateError(false);

		return result;
	};

	const addTask = () => {
		const inputDate = isDateAdded ? new Date(formData.dueDate) : "";

		if (!isValidForm(inputDate)) return;
		const newTask = {
			title: formData.title,
			desc: formData.desc,
			// set the dueDate to the right day selected
			dueDate: formData.dueDate + (isDateAdded ? "T00:00:00" : ""),
			priority: formData.priority,
		};

		// add the new task to the current project
		setProjects((prevProjects) => {
			prevProjects[currProject].tasks.push(newTask);
			return prevProjects;
		});

		closeModal();
	};

	return (
		<div className="add-task-modal active">
			<div className="modal-content">
				<div className="modal-header">
					<h1>Add a task</h1>
				</div>
				<div className="modal-body">
					<form
						className="add-task-form"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="form-div">
							<div className="form-section task-title-section">
								<label htmlFor="title">Title</label>
								<input
									type="text"
									id="title"
									name="title"
									value={formData.title}
									onChange={handleChange}
									className={
										"form-task-title " +
										(showTitleError && "invalid")
									}
									maxLength="20"
								/>
								{showTitleError && (
									<div className="error">
										Please enter a title{" "}
									</div>
								)}
							</div>
							<div className="form-section task-desc-section">
								<label htmlFor="desc">Description</label>
								<textarea
									name="desc"
									id="desc"
									className="form-task-desc"
									value={formData.desc}
									onChange={handleChange}
									maxLength="400"
								></textarea>
							</div>
							<div className="form-section task-due-date-section">
								<label htmlFor="dueDate">Due Date</label>
								<input
									type="date"
									id="dueDate"
									name="dueDate"
									className={
										(isDateAdded ? "" : "inactive") +
										(showDateError ? " invalid" : "")
									}
									value={formData.dueDate}
									onChange={handleChange}
								/>
								{showDateError && (
									<div className="error">
										Please enter a valid date
									</div>
								)}

								<button
									className="due-date-toggle"
									type="button"
									onClick={toggleIsDateAdded}
								>
									{isDateAdded
										? "Remove Due Date"
										: "Add Due Date"}
								</button>
							</div>
							<div className="form-section task-priority-section">
								<label htmlFor="priority">Priority</label>
								<select
									onChange={handleChange}
									name="priority"
									id="form-priority"
								>
									<option value="0">Low</option>
									<option value="1">Medium</option>
									<option value="2">High</option>
								</select>
							</div>
							<div className="modal-buttons">
								<button
									onClick={closeModal}
									type="button"
									className="cancel-button"
								>
									Cancel
								</button>
								<button
									type="button"
									className="confirm-task-button"
									onClick={addTask}
								>
									Add task
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
