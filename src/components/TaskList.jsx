import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {

        if(!task.text || /^\s*$/.test(task.text)){
            return;
        };

        const newTask = [task, ...tasks];

        setTasks(newTask);

        localStorage.setItem("task", JSON.stringify(newTask));
    };

    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        };

        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
    };

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id);

        setTasks(removeArr);

        localStorage.setItem("task", JSON.stringify(removeArr));
    }

    const completeTask = id => {
        const updateTasks = tasks.map(task => {
            if(task.id === id){
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(updateTasks);

        localStorage.setItem("task", JSON.stringify(updateTasks));
    };

    useEffect(() => {
        const localStorageData = localStorage.getItem("task");
        if(localStorageData){
            try{
                const storedTasks = JSON.parse(localStorageData);

                setTasks(storedTasks);
            }catch(err){
                console.log("Error parsing tasks items from localStorage")
            }
        }
    }, []);

    return(
        <div>
            <h2>Qué plan tienes para Hoy</h2>
            <TaskForm onSubmit={addTask}/>
            <Task tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        </div>
    );
};

export default TaskList;