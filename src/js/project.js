const project = (title) => {
    // private
    let _title = title;
    const _list = [];
    // public
    const getTitle = () => {
        return _title;
    };
    const setTitle = (title) => {
        _title = title;
    };
    const getList = () => {
        return _list;
    };
    const addTask = (task) => {
        _list.push(task)
    };

    return {
        getTitle, setTitle,
        getList,
        addTask
    };
}

export default project;