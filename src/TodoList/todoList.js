import React from "react";
import ListItem from "./ListItem";

function todoList(props){
    return(
        <ul className="todoList">
            {props.todos.map(todo =>{
                return <ListItem title={todo.value}/>
            })}
        </ul>
    )
}

export default todoList;