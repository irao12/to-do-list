import React, { useState } from "react";
import { isValid } from "date-fns";

export default function ViewTask(props) {
	const { projects, currProject, target, setTarget, setModal } = props;

	const currTask = projects[currProject].tasks[target];

	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [titleInput, setTitleInput] = useState(currTask.title);
	const [isValidTitle, setIsValidTitle] = useState(true);
	const changeInput = () => {
		if (titleInput.trim() === "") {
			setIsValidTitle(false);
			return;
		}
		if (!isValidTitle) setIsValidTitle(true);
		currTask.title = titleInput;
		setIsEditingTitle(false);
	};

	const [isEditingDesc, setIsEditingDesc] = useState(false);
	const [descInput, setDescInput] = useState(currTask.desc);
	const changeDesc = () => {
		currTask.desc = descInput;
		setIsEditingDesc(false);
	};

	const [isEditingDate, setIsEditingDate] = useState(false);
	const [dateInput, setDateInput] = useState(currTask.dueDate.slice(0, 10));
	const [isValidDate, setIsValidDate] = useState(true);
	const [isDateAdded, setIsDateAdded] = useState(
		currTask.dueDate === "" ? false : true
	);
	const changeDueDate = () => {
		if (
			isDateAdded &&
			!isValid(new Date(dateInput + (isDateAdded ? "T00:00:00" : "")))
		) {
			setIsValidDate(false);
			return;
		}

		currTask.dueDate = dateInput + (isDateAdded ? "T00:00:00" : "");
		if (!isValidDate) setIsValidDate(true);
		setIsEditingDate(false);
	};

	const [isEditingPriority, setIsEditingPriority] = useState(false);
	const [priorityInput, setPriorityInput] = useState(currTask.priority);
	const changePriority = () => {
		currTask.priority = priorityInput;
		setIsEditingPriority(false);
	};

	const closeModal = () => {
		setTarget(-1);
		setModal("");
	};

	return (
		<div className="view-task-modal active">
			<div className="modal-content">
				<div onClick={closeModal} className="close-view-task-button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="close"
					>
						<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
					</svg>
				</div>
				<div className="details-div">
					<div className="view-task-section task-title-section">
						<h2>Title:</h2>
						<div className="task-specific-detail">
							<h2
								className={`task-title-heading" ${
									!isEditingTitle && " active-block"
								}`}
							>
								{currTask.title}
							</h2>
							<input
								type="text"
								onChange={(e) => {
									setTitleInput(e.target.value);
								}}
								id="edit-task-title"
								name="title"
								className={`form-task-title ${
									isEditingTitle && "active-block"
								} ${!isValidTitle && "invalid"}`}
								maxLength="20"
								value={titleInput}
							/>
							<div className="edit-buttons">
								<svg
									onClick={() => setIsEditingTitle(true)}
									className={`edit-task-button ${
										!isEditingTitle && " active-block"
									} `}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
								</svg>
								<svg
									onClick={changeInput}
									className={`confirm-edit-button ${
										isEditingTitle && " active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
								</svg>
								<svg
									onClick={() => {
										setIsEditingTitle(false);
										setTitleInput(currTask.title);
										setIsValidTitle(true);
									}}
									className={`cancel-edit-button close ${
										isEditingTitle && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
								</svg>
							</div>
							{!isValidTitle && (
								<h3 className="error">
									Please enter a valid title
								</h3>
							)}
						</div>
					</div>
					<div className="view-task-section task-desc-section">
						<h2>Description:</h2>
						<div className="task-specific-detail">
							<p
								className={`task-desc-heading ${
									!isEditingDesc && "active-block"
								}`}
							>
								{currTask.desc}
							</p>
							<textarea
								name="desc"
								onChange={(e) => setDescInput(e.target.value)}
								value={descInput}
								id="form-task-desc"
								className={`form-task-desc ${
									isEditingDesc && "active-block"
								}`}
								maxLength="300"
							></textarea>
							<div className="edit-buttons">
								<svg
									onClick={() => {
										setIsEditingDesc(true);
									}}
									className={`edit-task-button ${
										!isEditingDesc && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
								</svg>
								<svg
									onClick={changeDesc}
									className={`confirm-edit-button ${
										isEditingDesc && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
								</svg>
								<svg
									onClick={() => {
										setIsEditingDesc(false);
										setDescInput(currTask.desc);
									}}
									className={`cancel-edit-button close ${
										isEditingDesc && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="view-task-section task-due-date-section">
						<h2>Due Date:</h2>
						<div className="task-specific-detail">
							<h2
								className={`task-due-date-heading ${
									!isEditingDate && "active-block"
								}`}
							>
								{currTask.dueDate === ""
									? "No Due Date"
									: currTask.dueDate.slice(0, 10)}
							</h2>
							<div
								className={`form-due-date-div ${
									isEditingDate && "active-flex"
								}`}
							>
								<input
									type="date"
									id="form-due-date"
									name="dueDate"
									value={dateInput}
									onChange={(e) => {
										setDateInput(e.target.value);
									}}
									className={`${!isValidDate && "invalid"} ${
										!isDateAdded && "inactive"
									}`}
								/>
								{!isValidDate && (
									<h3 className="error">
										Please enter a valid title
									</h3>
								)}
								<button
									onClick={() => {
										setIsDateAdded((prevIsDateAdded) => {
											setDateInput("");
											setIsValidDate(true);
											return !prevIsDateAdded;
										});
									}}
									className="due-date-toggle"
									type="button"
								>
									{isDateAdded
										? "Remove Due Date"
										: "Add Due Date"}
								</button>
							</div>
							<div className="edit-buttons">
								<svg
									onClick={() => {
										setIsEditingDate(true);
									}}
									className={`edit-task-button ${
										!isEditingDate && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
								</svg>
								<svg
									onClick={changeDueDate}
									className={`confirm-edit-button ${
										isEditingDate && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
								</svg>
								<svg
									onClick={() => {
										setIsEditingDate(false);
										setIsValidDate(true);
									}}
									className={`cancel-edit-button close ${
										isEditingDate && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="view-task-section task-priority-section">
						<h2>Priority:</h2>
						<div className="task-specific-detail">
							<h2
								className={`task-priority-heading ${
									!isEditingPriority && "active-block"
								}`}
							>
								{currTask.priority === "0" && "Low"}
								{currTask.priority === "1" && "Medium"}
								{currTask.priority === "2" && "High"}
							</h2>
							<select
								onChange={(event) => {
									setPriorityInput(event.target.value);
								}}
								className={`${
									isEditingPriority && "active-block"
								}`}
								name="priority"
								id="view-form-priority"
								value={priorityInput}
							>
								<option value="0">Low</option>
								<option value="1">Medium</option>
								<option value="2">High</option>
							</select>
							<div className="edit-buttons">
								<svg
									onClick={() => {
										setIsEditingPriority(true);
									}}
									className={`edit-task-button ${
										!isEditingPriority && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
								</svg>
								<svg
									onClick={changePriority}
									className={`confirm-edit-button ${
										isEditingPriority && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
								</svg>
								<svg
									onClick={() => {
										setIsEditingPriority(false);
										setPriorityInput(currTask.priority);
									}}
									className={`cancel-edit-button close ${
										isEditingPriority && "active-block"
									}`}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
