import React from 'react';

const Settings = ({setTodos,todos,setFilter}) => {
    const checkAllHandler = () => {
        setTodos(todos.map(e => {
            return {...e, check: true}
        }))
    }
    const clearCheckedTodosHandler = () => {
        setTodos(todos.filter((todo) => todo.check === false))
    }
    const setFilters = (e) => {
        setFilter(e.target.classList[0])
    }

    return (
        <div className="options-row">
            <div className="options">
                <button className="options__complete-all-btn option" onClick={checkAllHandler}>Завершить текущие</button>
                <button className="options__clear-btn option" onClick={clearCheckedTodosHandler}>Очистить завершённые</button>
            </div>
            <div className="filters">
                <button className="filters__all option" onClick={setFilters}>Все</button>
                <button className="filters__active option" onClick={setFilters}>Текущие</button>
                <button className="filters__completed option" onClick={setFilters}>Завершённые</button>
            </div>
        </div>
    );
};

export default Settings;