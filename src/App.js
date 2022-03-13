import './App.css';
import Settings from "./components/Settings";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import {useEffect, useState} from "react";

function App() {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('filters__all')
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        getLocalTodos()
    }, [])
    useEffect(() => {
        setFilterHandler()
        setLocalTodos()
    }, [todos, filter])

    const setFilterHandler = () => {
        if (filter === 'filters__active') setFilteredTodos(todos.filter(todo => todo.check === false))
        else if (filter === 'filters__completed') setFilteredTodos(todos.filter(todo => todo.check === true))
        else setFilteredTodos(todos)
    }
    const setLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) localStorage.setItem('todos', JSON.stringify([]))
        else {
            let localTodos = JSON.parse(localStorage.getItem('todos'))
            setTodos(localTodos)
        }
    }

    return (
        <>
            <h1 className="title">Todos</h1>
            <Form setInputText={setInputText}
                  inputText={inputText}
                  todos={todos}
                  setTodos={setTodos}
            />
            <Settings setTodos={setTodos}
                      todos={todos}
                      setFilter={setFilter}
            />
            <ToDoList todos={todos}
                      setTodos={setTodos}
                      filteredTodos={filteredTodos}
            />
        </>
    );
}

export default App;
