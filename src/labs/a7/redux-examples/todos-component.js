import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";    // import reducer functions

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});        // create todo local state variable

    const dispatch = useDispatch();                             // get dispatcher to invoke reducer functions

    const toggleTodoDone = (todo) => {                          // handle checkbox click event, accept todo index
        dispatch(todoDoneToggle(todo))                          // send index to reducer function passing index
    }                                                           // of todo to toggle done field


    const deleteTodoClickHandler = (index) => {                 // handle delete button click, accepts todo index
        dispatch(deleteTodo(index))                             // dispatch event to deleteTodo reducer function
    }                                                           // passing index of todo we want to delete

    const createTodoClickHandler = () => {                      // handle click event of button
        dispatch(addTodo(todo))                                 // call reducer function passing new todo
    }                                                           // as the payload in the action object

    const todoChangeHandler = (event) => {                      // handle keystroke changes in input field
        const doValue = event.target.value;                     // get data from input field
        const newTodo = {                                       // create new todo object instance
            do: doValue                                         // setting the todo's do property
        };
        setTodo(newTodo);                                       // change local state todo variable
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}    // new button to add new todo, calls function to handle click event
                            className="btn btn-primary w-25
                          float-end">
                        Create</button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"/>
                </li>
                {
                    todos.map((todo, index) =>                   // new Delete button sends index of todo to delete to handler. Note () => {} because we are passing index parameter otherwise gets into infinite loop
                        <li className="list-group-item">
                            <button onClick={() =>
                                deleteTodoClickHandler(index)}
                                    className="btn btn-danger float-end ms-2">
                                Delete
                            </button>

                            <input type="checkbox"              /*new checkbox which is checked*/
                                   checked={todo.done}          /*if todo.done is true*/
                                   onChange={() =>              /*if user changes checkbox, we'll pass the*/
                                       toggleTodoDone(todo)}    /*todo to reducer function to update todo's state*/
                                   className="me-2"/>

                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;

