import { createContext, useState } from "react";

const Todo = createContext([
    {
        id:0,
        title:"First task todo",
        description:"Create your first todo card by clicking on create "
    }
]);
function TodoStore(props) {
    let [todos, setTodos] = useState([
        {
            id:0,
            title:"First task todo",
            description:"Create your first todo card by clicking on create "
        }
    ]);

    let [id, setId] = useState(100);
    let handleCreate = (title, description)=>{
        setId(id+10);
        setTodos([...todos, {id,title,description}]);
        // setTodos(todos.push({id,title,description}));
        
    }
    return(
        <Todo.Provider value={ {todos,handleCreate} }>
            {props.children}
        </Todo.Provider>
    );
}
export {Todo, TodoStore};