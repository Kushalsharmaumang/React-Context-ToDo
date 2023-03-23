import { useContext, useState } from "react";
import { Todo } from "../api/TodoStore";

const Form =()=>{
    let data = useContext(Todo);
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("form submit");
        console.log("title :"+title);
        console.log("desc :"+description);
        data.handleCreate(title,description);
        
    };
    
    let handleTitle = (e)=>{
        setTitle(e.target.value);
    };
    let handleDescription = (e)=>{
        setDescription(e.target.value);
    };

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={handleTitle}/>
                <input type="text" placeholder="Description" onChange={handleDescription}/>
                <button>Create</button>
            </form>
        </section>
    )   
}
export default Form;