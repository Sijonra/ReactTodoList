import React from "react";
import TodoList from './TodoList/todoList'

function App() {

    let todos = [
        {id: 0, iscompleted: false, value: "Купить Антоху"},
        {id: 1, iscompleted: false, value: "Купить Картоху"},
        {id: 2, iscompleted: false, value: "Купить Гармоху"},
    ];

    return(
        <TodoList todos={todos}/>
    )
}

export default App;