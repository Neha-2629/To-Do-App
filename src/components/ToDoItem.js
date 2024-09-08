

const ToDoItem = ({todo, index, toggleTodo, removeTodo}) => {
    return(
        <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}> 
            {index+1}.&nbsp;
            {todo.text}
            <button onClick={() => toggleTodo(index)}>{todo.completed ? 'Undo' : 'Complete'}</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
    )
}

export default ToDoItem;