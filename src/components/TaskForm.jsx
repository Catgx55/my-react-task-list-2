import { useState, useEffect, useRef } from "react";

const TaskForm = (prosp) => {
    const [input, setInput] = useState(prosp.edit ? prosp.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    //funcion para evitar la recarga de la pagina
    const handleSubmit = e => {
        e.preventDefault();

        prosp.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
//Formulario de ingreso de tareas
    return(
        <form className="task-list" onSubmit={handleSubmit}>
            {prosp.edit ? (
                <>
                <input placeholder="Edita tu tarea" value={input} onChange={handleChange} name="text" ref={inputRef} className="task-input edit" />
                <button onClick={handleSubmit} className="todo-button edit">Actualizar</button>
                </>
            ) : (
                <>
                <input placeholder="Agregar tarea" value={input} onChange={handleChange} name="text" className="todo-input" ref={inputRef} />
                <button onClick={handleSubmit} className="todo-button">Agregar Tarea</button>
                </>
            )}
        </form>
    );
};

export default TaskForm;