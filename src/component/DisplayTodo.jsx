import { useContext,useRef,useState } from "react";
import { Todo } from "../api/TodoStore";

const DisplayTodo =()=>{
    const {todos,handleDelete,handleEdit} = useContext(Todo);
    let [editTitle, setEditTitle] = useState("");
    let [editDesc, setEditDesc] = useState("");
    let editTitleRef = useRef(editTitle);
    let editDescRef = useRef(editDesc);
    let [editCardId, setEditCardId ] = useState(0);
    
    let [card, setCard ] = useState(false);
    let [editBox, seteditBox ] = useState(false);

    let editBoxRef = useRef(editBox);
    let cardRef = useRef(card);
    
    let handleCardClick =(value,titleRef,descRef)=>{
        // console.log(value);
        setEditCardId(value.id);
        setEditTitle(value.title);
        setEditDesc(value.description);
        titleRef.current.value=value.title;
        descRef.current.value=value.description;
    };
    return(
        <div className="
        my-4 p-2
        rounded-md
        flex justify-center
        ">
           <section
            className="
            z-10
            absolute
            w-10/12
            rounded
            flex flex-col
            gap-2
            border-2
            shadow-xl
            backdrop-sepia-0
            bg-white/80
            p-2
            hidden
            "
            ref={editBoxRef}
            >
                <input type="text" placeholder="Title"
                ref={editTitleRef}
                onChange={(e)=>{
                    setEditTitle(e.target.value)
                }}
                className="
                text-2xl
                p-2
                "
                />

                <textarea type="text" placeholder="Description"
                rows="5"
                ref={editDescRef}
                onChange={(e)=>{
                    setEditDesc(e.target.value)
                }}
                className="
                text-lg
                h-fit
                "/>
{/* edit button click */}
                <button
                onClick={(e)=>{
                    handleEdit(editCardId,editTitle,editDesc);
                    editBoxRef.current.classList.add("hidden");


                }}
                className="
                self-end
                text-3xl
                rounded-lg px-2
                ">✅</button>
            </section>
            <section className="
            flex flex-wrap justify-evenly
            gap-1
            w-full
            ">
                {/* {console.log(todos)} */}
            {todos.map((value)=>{
                return(
                    <div key={value.id} className="
                    h-fit
                    w-[45%]
                    p-1
                    border rounded
                    bg-white
                    flex flex-col justify-center items-center
                    "
// card click
                    onClick={(e)=>{
                        handleCardClick(value,editTitleRef,editDescRef);
                        editBoxRef.current.classList.remove("hidden");
                        
                    }}
                    
                    >
                    <h5 className="
                    font-bold
                    ">{value.title}</h5>
                    <p className="
                    
                    ">{value.description}</p>
                    
                    <button className="
                    w-fit
                    "
                    onClick={()=>handleDelete(value.id)}>🗑️</button>

                    </div>
                    )
                })}
            </section>
        </div>
    )
}
export default DisplayTodo;