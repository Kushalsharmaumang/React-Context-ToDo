import { useContext } from "react";
import { Todo } from "../api/TodoStore";

const DisplayTodo =()=>{
    const {todos} = useContext(Todo);
    return(
        <div className="
        my-4 p-2
        bg-blue-600 rounded-md
        ">
            <h4 className="
            font-mono font-bold text-white
            ">All Tasks</h4>
            <ol className="
            flex flex-wrap justify-evenly items-start
            border rounded p-1 gap-1
            ">
                {/* {console.log(todos)} */}
            {todos.map((value)=>{
                return(
                    <li key={value.id} className="
                    flex-col justify-between
                    w-2/5
                    rounded
                    bg-pink-200
                    ">
                    <h5>{value.title}</h5>
                    <p>{value.description}</p>
                    </li>
                    )
                })}
            </ol>
        </div>
    )
}
export default DisplayTodo;