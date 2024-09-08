
import {useState} from 'react';

const ToDoForm = ({addTodo}) => {
    const[input, setInput] = useState('');
    const submithandler = (e) => {
        e.preventDefault();
        if(input){
            addTodo(input);
            setInput('');
        }
    }

    return(
        <div>
            <form onSubmit={submithandler}>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter the ToDo Item" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ToDoForm;