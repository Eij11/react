import React, { useState } from "react";

import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    //checks if the input is empty and wont add one if it is
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    //The callback function returns true for all elements whose index i is not equal to the index parameter. This effectively removes the element at the specified index from the tasks array.
    const updatedTasks = tasks.filter((_, i) => i !== index);

    // This line updates the state variable tasks with the new array updatedTasks, which no longer includes the task at the specified index.
    setTasks(updatedTasks);
  };
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  };

  const listOfTasks = tasks.map((task, index) => (
    <li key={index}>
      <span className={styles.task_text}>{task}</span>

      <button className={styles.btn_delete} onClick={() => deleteTask(index)}>
        Delete
      </button>

      <button className={styles.btn_move} onClick={() => moveTaskUp(index)}>
        ⬆️
      </button>

      <button className={styles.btn_move} onClick={() => moveTaskDown(index)}>
        ⬇️
      </button>
    </li>
  ));

  return (
    <div className={styles.container_toDoList}>
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className={styles.btn_add} onClick={addTask}>
          Add
        </button>
      </div>

      <ol>{listOfTasks}</ol>
    </div>
  );
};

export default ToDoList;
