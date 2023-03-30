import { useContext, useState, useRef } from "react";
import { Todo } from "../api/TodoStore";

const Form =()=>{
    let data = useContext(Todo);
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("form submit");
        // console.log("title :"+title);
        // console.log("desc :"+description);
        data.handleCreate(title,description,titleRef,descRef);
        
        setTitle("");
        setDescription("Empty Note");
        
    };
// refs
    let titleRef = useRef(title);
    let descRef = useRef(description);
    

    let handleTitle = (e)=>{
        setTitle(e.target.value);
    };
    let handleDescription = (e)=>{
        setDescription(e.target.value);
    };

    return(
        <section className="
        p-3 rounded-md
        border
        ">
            {/* <h1  className="
            py-4 text-4xl font-bold text-white
            ">Tasks ToDo</h1> */}
            <form onSubmit={handleSubmit} className="
            flex flex-col
            rounded-lg p-1 gap-1
            bg-yellow-100 drop-shadow-2xl
            ">
                <input type="text" placeholder="Title" onChange={handleTitle}
                ref= {titleRef}
                className="
                justify-between
                border border-white hover:border-slate-300 focus:border-slate-300
                rounded-lg p-1
                text-xl font-sans
                text-blue-900
                "/>
                <input type="text" placeholder="Description" onChange={handleDescription}
                ref= {descRef}
                className="
                justify-between
                h-fit
                border border-white hover:border-slate-300 focus:border-slate-300
                rounded-lg p-1 mx-2
                text-md
                "/>
                <button className="
                self-end
                text-2xl
                rounded-lg px-2
                font-2xl
                hover:shadow
                ">➕</button>
            </form>
        </section>
    )   
}
export default Form;