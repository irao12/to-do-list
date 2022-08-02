const task = (title, desc, dueDate, priority) => {
    //private
    let _title = title;
    let _desc = desc;
    let _dueDate = dueDate;
    let _priority = priority;
    let _isComplete = false;
    //public
    // getters
    const getTitle = () => {
        return _title;
    };
    const getDesc = () => {
        return _desc;
    };
    const getDueDate = () => {
        return _dueDate;
    };
    const getPriority = () => {
        return _priority;
    };
    const getStatus = () => {
        return _isComplete;
    };
    // setters
    const setTitle = (newTitle) => {
        _title = newTitle;
    };
    const setDesc = (newDesc) => {
        _desc = newDesc;
    };
    const setDueDate = (newDueDate) => {
        _dueDate = newDueDate;
    };
    const setPriority = (newPriority) => {
        _priority = newPriority;
    };
    const setStatus = (newStatus) => {
        _isComplete = newStatus;
    };

    return {
        getTitle,
        getDesc,
        getDueDate,
        getPriority,
        setTitle,
        setDesc,
        setDueDate,
        setPriority,
        getStatus,
        setStatus,
    };
};

export default task;
