import React from "react";
import { GoTrash, GoInfo } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid orange" } : {}}
    >
      <div className="taskTitle" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="see-task-details-button"
          onClick={() => handleTaskDetailsClick()}
        >
          <GoInfo />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <GoTrash />
        </button>
      </div>
    </div>
  );
};

export default Task;
