import React from "react";
import TodoList from './TodoList/TodoList'

function App() {

    let todos = [
        {id: 0, isCompleted: false, value: "Купить Антоху"},
        {id: 1, isCompleted: false, value: "Купить Картоху"},
        {id: 2, isCompleted: false, value: "Купить Гармоху"},
    ];

    const handleChange = (id) =>{
        todos[id].isCompleted = !todos[id].isCompleted;
    }

    return(
        <TodoList
            todo={todos}
            handleChange={handleChange}
        />
    )
}

export default App;