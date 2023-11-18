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

    const handleSubmit = e => {
        e.preventDefault();

        prosp.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    
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
                <button onClick={handleSubmit} className="todo-button">+</button>
                </>
            )}
        </form>
    );
};

export default TaskForm;