import React from "react";
import './TodoList.css';

function ListItem(props){

    let classes = [];

    if(props.todo[props.id].isCompleted){
        classes.push('item-completed');
    }

    return(
        <li className="todo__item">
            <span className={classes.join(' ')}>
                <input
                    className="list-input"
                    type="checkbox"
                    onChange={()=> props.handleChange(props.id)}
                />
                <strong>{props.id}</strong>
                {props.value}
            </span>
            <button className="todo-list-delete-button">&times;</button>
        </li>
    )

}

export default ListItem;

