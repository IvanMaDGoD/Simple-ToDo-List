import React from 'react';

const Form = ({inputText, setInputText, setTodos, todos}) => {
    const inputHandler = (e) => {
        setInputText(e.target.value)
    }
    const addTodoHandler = (e) => {
        e.preventDefault()
        if (inputText) {
            setTodos([...todos, {text: inputText, check: false, id: Math.trunc(Math.random() * 1000000)}])
            setInputText('')
        }

    }

    return (
        <form className="form">
            <input type="text"
                   className="form__input"
                   placeholder="Добавить ToDo"
                   value={inputText}
                   onChange={inputHandler}
            />
            <button className="form__submit"
                    type="submit"
                    onClick={addTodoHandler}
            >
                <i className="fa-solid fa-plus"/>
            </button>
        </form>
    );
};

export default Form;