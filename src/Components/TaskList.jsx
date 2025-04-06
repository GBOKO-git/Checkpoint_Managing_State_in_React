import TaskItem from "./TaskItem";

const TaskList = ({tasks, deleteTask, toggleComplete, handleEdit}) => {
    return(
        <>
        <h3>la liste des taches</h3>
        <ul>{
            tasks.map((task) => (

                <TaskItem key={task.id} 
                task={task} deleteTask={deleteTask} 
                toggleComplete={toggleComplete} handleEdit={handleEdit}
                />
            ))
            }
        </ul>
        </>
    )
} 

export default TaskList;