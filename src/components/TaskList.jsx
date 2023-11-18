//import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useTodoApp } from "../hooks/useTodoApp";

const TaskList = () => {
    const [tasks, addNewTasks, editTasks, deleteTasks, completedTasks] = useTodoApp();

    const addTask = (task) => {
        addNewTasks(task);
    };

    const updateTask = (taskId, newValue) => {
        editTasks(taskId, newValue);
    };

    const removeTask = (id) => {
        deleteTasks(id);
    };

    const completeTask = (id) => {
        completedTasks(id);
    };

    return(
        <div>
            <h2>Qué plan tienes para Hoy</h2>
            <TaskForm onSubmit={addTask}/>
            <Task tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        </div>
    );
};

export default TaskList;