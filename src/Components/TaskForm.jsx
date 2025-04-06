// formulaire pour l’ajout de nouvelles tâches.

import { useState } from "react";
import './style.css'
// import ShareButton from "./Button/shareButton";

const TaskForm = ({addTask, editTask, taskEdit}) => {

    const [taskName, setName] = useState(taskEdit && taskEdit.name ? taskEdit.name : "" );
    const [taskDescription, setDescription] = useState(taskEdit && taskEdit.description ? taskEdit.description : "");
    


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !taskDescription) {
            alert("Le nom et la description son requis.");
            return;
        }
    const task = {name: taskName, description: taskDescription};
    if (taskEdit) {
        editTask(taskEdit.id, task) // EDITER LA TACHE
    } else 
    {addTask(task)}
    setName("");
    setDescription("");
    }

    return(
        <>
            <h3>Ajouter une tache !</h3>
            <div>
                {/*  champs de saisie pour le nom et la description des tâches */}
                <form onSubmit={handleSubmit} >
                    <div className="inputContent">

                    <div>
                        <label htmlFor="name"></label>
                        <input type="text" className="inputName"
                        value={taskName} 
                        placeholder="Veillez renseigner le nom de la taches"
                        required // s’assurer que ce champs sont remplis avant l’ajout d’une tâche.
                        onChange={(event) => setName(event.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="name"></label>
                        <textarea value={taskDescription}  
                        placeholder="Veillez donner la description de la taches" 
                        required // s’assurer que ce champs sont remplis avant l’ajout d’une tâche.
                        onChange={(event) => setDescription(event.target.value)}/>
                    </div>
                    
                    <button className="addBtn" type="submit">{taskEdit ? "EditER " : "AJOUTER"}</button>
                    {/* <ShareButton {...{ name: 'Create Task'}}  type="submit"/> */}
                    </div>
                </form>
            </div>
           

        </>
    )
}

export default TaskForm;