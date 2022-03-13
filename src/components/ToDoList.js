import React from 'react';
import Todo from "./Todo";

const ToDoList = ({filteredTodos, setTodos}) => {
    return (
        <main className="main">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo key={todo.id}
                          text={todo.text}
                          check={todo.check}
                          setTodos={setTodos}
                          todos={filteredTodos}
                          todo={todo}
                    />
                ))}
            </ul>
        </main>
    );
};

export default ToDoList;