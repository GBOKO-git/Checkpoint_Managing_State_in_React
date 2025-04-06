
import { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'


function App() {
  
  const [tasks, setTasks] = useState([]);
  const [taskEdit, setTaskEdit] = useState(null);

  // LocalStorage : rechargement des tasks
  useEffect(()=>{
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if(savedTasks){
      setTasks(savedTasks);
    }
  }, [])

  // enregistrer les taches en local
  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
        ...task,
        id: Date.now(),
        completed: false
      }
    setTasks((prevTasks) =>[...prevTasks, newTask]);
  }

  const deleteTask = (taskId) => {
    if (window.confirm("Voulez-vous vraiement supprimer la tache ?")) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  }

  const editTask = (taskID, updatedTask) => {
    setTasks((prevTasks) => prevTasks.map((task) => 
      task.id ===taskID ? {...task, ...updatedTask} : task
  ));
  setTaskEdit(null);
  }

  const toggleComplete = (task) => {
    setTasks((prevTasks) => 
      prevTasks.map((item) => 
        item.id === task ? {...item, completed: !item.completed} : item));
  }

  const handleEdit = (task) => {
    setTaskEdit(task);
  }
  

  return (
    <>
      <header>
      <h1>TO-DO list</h1>
      </header>
      <main>
        <TaskForm {...{addTask, editTask, taskEdit}} />
        <TaskList {...{tasks, deleteTask, toggleComplete, handleEdit}}/>
      </main>
      <footer>
      <p>
        @ 2025 | by AMARA GBOKO | tout droit reservé
      </p>
      </footer>
    </>
  )
}

export default App
