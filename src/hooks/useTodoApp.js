import { useState, useEffect } from "react";

export function useTodoApp () {
    const [tasks, setTasks] = useState([]);

    function addNewTasks(task){

        if(!task.text || /^\s*$/.test(task.text)){
            return;
        };

        const newTask = [task, ...tasks];

        setTasks(newTask);

        console.log(newTask);

        localStorage.setItem("task", JSON.stringify(newTask));
    };

    function editTasks(taskId, newValue){
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        };

        const tasksEdit = tasks.map(item => (item.id === taskId ? newValue : item))

        setTasks(tasksEdit);

        localStorage.setItem("task", JSON.stringify(tasksEdit));
    };

    function deleteTasks(id){
        const removeArr = [...tasks].filter(task => task.id !== id);

        setTasks(removeArr);

        localStorage.setItem("task", JSON.stringify(removeArr));
    };

    function completedTasks(id){
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

    return [
        tasks,
        addNewTasks,
        editTasks,
        deleteTasks,
        completedTasks

    ];
};