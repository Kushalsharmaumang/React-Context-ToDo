import { useContext } from "react";
import { Todo } from "../api/TodoStore";

const DisplayTodo =()=>{
    const {todos} = useContext(Todo);
    return(
        <ol>
            {console.log(todos)}
        {todos.map((value)=>{
            return(
                <li key={value.id}>
                <h5>Title : {value.title}</h5>
                <h6>Description : {value.description}</h6>
                </li>
                )
            })}
        </ol>
    )
}
export default DisplayTodo;