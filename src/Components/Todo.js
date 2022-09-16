import { useState } from 'react';
import '../style.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo, addTodo,removeTodo } from '../redux/todoSlices';
import { v4 as uuidv4 } from 'uuid';


function Todo() {
    const todo = useSelector(selectTodo);
    const dispatch = useDispatch();
    

    const [todoText, setTodoText] = useState({});
    const onChangeTodoText = ({target}) => {
        const {name, value} = target;
        setTodoText(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const onClickTodoText = (e) => {
        e.preventDefault();
        const newTodo = { id: uuidv4(), todoText: todoText.todoText }
        dispatch(addTodo(newTodo))
    }


    const onClickDeleteTodo = (e) => {
        e.preventDefault();
        dispatch(removeTodo(e.target.parentElement.value))
    }

    return (
        <div className="todos">
            <div className="todo-title">
                <h1>Todo App</h1>
            </div>
            <div className="input">
                <form onSubmit={onClickTodoText}>
                    <input type="text" name="todoText" id="todo" placeholder="Add your new todo" onChange={onChangeTodoText}/>
                    <button type='submit'><i className='bx bx-plus-medical'></i></button>
                </form>
            </div>
            <div className="todo-items">
                <ul>
                    {todo.todo.map(item => <li><p>{item.todoText}</p><button onClick={onClickDeleteTodo} name="todoText" value={item.id}><i className='bx bxs-trash-alt'></i></button></li>)}
                </ul>
            </div>
        </div>
    );
}

export default Todo;