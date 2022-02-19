import React from "react";
import TodoList from './TodoList/TodoList'

function App() {

    let todos = [
        {id: 0, isCompleted: false, value: "Купить Антоху"},
        {id: 1, isCompleted: false, value: "Купить Картоху"},
        {id: 2, isCompleted: false, value: "Купить Гармоху"},
    ];

    return(
        <TodoList todo={todos}/>
    )
}

export default App;