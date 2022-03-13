import React, {useState} from 'react';

const Todo = ({text, setTodos, todos,todo}) => {
    const [todoText, setTodoText] = useState(text)
    const deleteTodoHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }
    const changeTodoHandler = (e) => {
        setTodoText(e.target.value)
    }
    const checkTodoHandler = () =>{
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return{ ...item, check: !item.check}
            }
            return item
        }))
    }

    return (
        <li className="todo">
            <input className={`todo__item ${todo.check? 'check': ''}`} value={todoText} onChange={changeTodoHandler}/>
            <button className="todo__check-btn"
                    onClick={checkTodoHandler}
            >
                <i className="fa-solid fa-check"/>
            </button>
            <button className="todo__delete-btn"
                    onClick={deleteTodoHandler}
            >
                <i className="fa-solid fa-trash"/>
            </button>
        </li>
    );
};

export default Todo;