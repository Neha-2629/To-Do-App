import ToDoItem from "./ToDoItem";


const ToDoList = ({todos, toggleTodo, removeTodo}) => {

    return(
      <ul>
        {todos.map((todo, index) => (
            <ToDoItem 
                key={index}
                index={index}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />
        ))}
      </ul>
    )
}

export default ToDoList;