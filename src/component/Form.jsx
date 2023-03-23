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
        <section className="
        bg-blue-600 p-3 rounded-md
        ">
            <h1  className="
            py-4 text-4xl font-bold text-white
            ">Tasks ToDo</h1>
            <form onSubmit={handleSubmit} className="
            flex flex-col
            rounded-lg p-1 gap-1
            bg-pink-200 drop-shadow-2xl
            ">
                <input type="text" placeholder="Title" onChange={handleTitle}
                className="
                self-start justify-between
                border rounded-lg p-1
                text-xl font-sans
                text-blue-900
                "/>
                <input type="text" placeholder="Description" onChange={handleDescription}
                className="
                 justify-between
                border rounded-xl p-1 mx-2
                text-md
                "/>
                <button className="
                self-end
                w-fit
                text-white
                rounded-lg px-2
                bg-blue-600 hover:bg-green-100 hover:text-black
                ">Add Task</button>
            </form>
        </section>
    )   
}
export default Form;