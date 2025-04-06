import React from "react";
import "./style.css"
// import ShareButton from "./Button/shareButton";


const TaskItem = ({task, deleteTask, toggleComplete, handleEdit}) => {
    return(
        <> 
          <div className="taskItems">
            <li type="none" className="taskItemCart"
            style={{textDecoration: task.completed ? "line-through" : "none",}}
            >
                <div className="checkbox">
                  <input type="checkbox" checked={task.completed}
                  onClick={() => toggleComplete(task.id)}/>
                  <h6 className="tacheId">La tache {task.id}</h6>
                </div>
                <div className="taskItem">
                  <h4 onClick={() =>handleEdit(task)}>{task.name} </h4>
                </div>
                <div className="taskItem">
                  <p>{task.description} </p>
                </div>
            </li>
            <div className="taskBtn">
                <button className="completeBtn" onClick={() => toggleComplete(task.id)}>{task.completed ? "Défaire" : "Completer"}</button>
                <button className="deleteBtn" onClick={() => deleteTask(task.id)}>supprimer</button>
            </div>
          </div>
        </>
    )
} 

export default TaskItem;