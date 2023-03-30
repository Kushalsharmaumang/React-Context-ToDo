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
        // {
        //     id:0,
        //     title:"First task todo",
        //     description:"Create your first todo card by clicking on create "
        // }
    ]);

    let [id, setId] = useState(100);
    let handleCreate = (title, description,titleRef,descRef)=>{
        setId(id+10);
        setTodos([...todos, {id,title,description}]);

        
        titleRef.current.value="";
        descRef.current.value="";
        // setTodos(todos.push({id,title,description}));
    }
    let handleDelete = (id)=>{
        if(confirm("Do you really want to delete?"))
        setTodos(todos.filter(value=>(id!=value.id)));
        console.log(
            todos
        ); 
    }
    let handleEdit = (editCardId,editTitle,editDesc)=>{
        // console.log("value passed");
        // console.log(editCardId);
        // console.log(editTitle);
        // console.log(editDesc);
        // console.log(todos);
        setTodos(todos.filter((value)=>{
            if (value.id===editCardId) {
                value.title=editTitle;
                value.description=editDesc;
            }
            return value
        }))
        
    }
    return(
        <Todo.Provider
        value={ {todos,handleCreate,handleDelete,handleEdit} }>
            {props.children}
        </Todo.Provider>
    );
}
export {Todo, TodoStore};