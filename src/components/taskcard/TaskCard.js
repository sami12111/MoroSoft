import React from "react";
import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="task-card-wrappr mb-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
