import React from "react";
import TodoList from './TodoList/TodoList'

function App() {

    const [todos, setTodos] = React.useState(
        [
            {id: 0, isCompleted: false, value: "Купить Антоху"},
            {id: 1, isCompleted: false, value: "Купить Картоху"},
            {id: 2, isCompleted: false, value: "Купить Гармоху"},
        ]
    )

    const handleChange = (id) =>{
        setTodos(
            todos.map(element =>{
                if(element.id === id){
                    element.isCompleted = !element.isCompleted;
                }
                return element;
            })
        )

    }

    return(
        <TodoList
            todo={todos}
            handleChange={handleChange}
        />
    )

}

export default App;