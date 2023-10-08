import { useState } from "react";
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TaskForm from "./TaskForm";

const Task = ({tasks, completeTask, removeTask, updateTask}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submiUpdate = value => {
        updateTask(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if(edit.id){
        return <TaskForm edit={edit} onSubmit={submiUpdate} />
    };
    
    return tasks.map((task, index) => (
        <div className={task.isComplete ? 'task-row complete' : 'task-row'} key={index}>

            <div key={task.id} onClick={() => completeTask(task.id)}>
                {task.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeTask(task.id)} className="delete-icon"/>
                <TiEdit onClick={() => setEdit({id: task.id, value: task.text})} className="edit-icon"/>
            </div>

        </div>
    ));
};

export default Task;