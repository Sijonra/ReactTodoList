import './TodoList.css';
import ListItem from "./ListItem";

function todoList(props){
        console.log(props.todo);
    return(
        <div className="todo-list-wrapper">
            <h1 className="todo-list__title">To Do List</h1>
            <ul className="todo-list">
                {props.todo.map(element =>{
                    return(
                        <ListItem
                            value={element.value}
                            key={element.id}
                            id={element.id}
                            handleChange={props.handleChange}
                        />
                    )
                })}
            </ul>
        </div>
    )

}

export default todoList;