import {useState} from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './App.css';

const INITIAL_TASKS = [
    {text: 'Walk the dog', completed: false},
    {text: 'Water the plants', completed: false},
    {text: 'Wash the dishes', completed: false},
  ];

const App = () => {
  const [todos, setTodos] = useState(INITIAL_TASKS);

  const addTodo = (text) => {
    const newTodos = [...todos, {text, completed:false}];
    setTodos(newTodos);
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }


  return(
    <div className='app'>
      <h1>To-Do App</h1>
      <ToDoForm addTodo={addTodo}/>
      <ToDoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default App;
