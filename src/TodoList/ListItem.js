import React from "react";
import './TodoList.css';

function ListItem(props){

    return(
        <li className="todo__item">
            <span>
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

