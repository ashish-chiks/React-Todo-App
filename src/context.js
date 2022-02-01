import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false);
  const [showSeparateList, setShowSeparateList] = useState(false);
  const [task, setTask] = useState({ info: "", isDone: false, id: Date.now() });

  const toggleError = () => {
    setError(!error);
  };

  const addTask = (item) => {
    setTodoList([...todoList, item]);
  };

  const toggleShowSeparateList = (e) => {
    e.target.blur();
    setShowSeparateList(!showSeparateList);
  };

  const handleChange = (e) => {
    if (task.info.length > 4 && error) toggleError();
    setTask({ ...task, info: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.info.length < 6) {
      if (!error) toggleError();
      return;
    }
    addTask(task);
    setTask({ info: "", isDone: false, id: Date.now() });
  };

  const handleClick = (id) => {
    const newTasks = todoList.slice();
    newTasks.forEach((item) => {
      if (item.id === id) item.isDone = !item.isDone;
    });
    setTodoList(newTasks);
  };

  return (
    <AppContext.Provider
      value={{
        todoList,
        error,
        task,
        showSeparateList,
        toggleError,
        toggleShowSeparateList,
        addTask,
        handleChange,
        handleSubmit,
        handleClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
