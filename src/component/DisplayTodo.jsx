import { useContext,useRef,useState } from "react";
import { Todo } from "../api/TodoStore";

const DisplayTodo =()=>{
    const {todos,handleDelete,handleEdit} = useContext(Todo);
    let [editTitle, setEditTitle] = useState("");
    let [editDesc, setEditDesc] = useState("");
    let editTitleRef = useRef(editTitle);
    let editDescRef = useRef(editDesc);
    let [editCardId, setEditCardId ] = useState(0);
    
    let [card, setCard ] = useState();
    let [editBox, seteditBox ] = useState(false);

    let editBoxRef = useRef(editBox);
    
    let handleCardClick =(value,titleRef,descRef)=>{
        // console.log(value);
        setEditCardId(value.id);
        setEditTitle(value.title);
        setEditDesc(value.description);
        titleRef.current.value=value.title;
        descRef.current.value=value.description;
    };
    let handelColor =()=>{
        card.target.classList.remove("bg-white-100")
        card.target.classList.remove("bg-red-100")
        card.target.classList.remove("bg-yellow-100")
        card.target.classList.remove("bg-green-100")
    }

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
                <div className="
                flex justify-evenly
                ">
                <button className="
                    w-fit
                    text-xl
                    sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl
                    rounded-lg px-2
                    "
                    onClick={()=>{handleDelete(editCardId);
                        editBoxRef.current.classList.add("hidden");
                    }}
                    >🗑️</button>
{/* color input */}
                <button
                    onClick={()=>{
                        handelColor();
                        card.target.classList.add("bg-white-100");
                        editBoxRef.current.classList.add("hidden");
                    }}
                    className="
                    w-9 h-9
                    border rounded-full px-2
                    bg-white-100
                    "></button>
                <button
                    onClick={()=>{
                        handelColor();
                        card.target.classList.add("bg-red-100");
                        editBoxRef.current.classList.add("hidden");
                    }}
                    className="
                    w-9 h-9
                    border rounded-full px-2
                    bg-red-100
                    "></button>
                <button
                    onClick={()=>{
                        handelColor();
                        card.target.classList.add("bg-yellow-100");
                        editBoxRef.current.classList.add("hidden");
                    }}
                    className="
                    w-9 h-9
                    border rounded-full px-2
                    bg-yellow-100
                    "></button>
                <button
                    onClick={()=>{
                        handelColor();
                        card.target.classList.add("bg-green-100");
                        editBoxRef.current.classList.add("hidden");
                    }}
                    className="
                    w-9 h-9
                    border rounded-full px-2
                    bg-green-100
                    "></button>
{/* edit button click */}
                <button
                    onClick={(e)=>{
                        handleEdit(editCardId,editTitle,editDesc);
                        editBoxRef.current.classList.add("hidden");
                    }}
                    className="
                    self-end
                    text-xl
                    sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl
                    rounded-lg px-2
                    ">✅</button>
                </div>
            </section>
{/* display section */}
            <section 
            className="
            flex flex-wrap justify-evenly
            gap-1
            w-full
            ">
                {/* {console.log(todos)} */}
            {todos.map((value)=>{
                return(
                    <div key={value.id} className="
                    h-fit
                    w-[100%]
                    sm:w-[100%] md:w-[45%] lg:w-[45%] xl:w-[45%] 
                    p-1
                    border rounded
                    flex flex-col justify-center items-center
                    "
// card click
                    onClick={(e)=>{
                        handleCardClick(value,editTitleRef,editDescRef);
                        editBoxRef.current.classList.remove("hidden");
                        setCard(e);
                        console.log(card.target.classList);
                    }}
                    
                    >
                    <h5 className="
                    font-bold
                    ">{value.title}</h5>
                    <p>{value.description}</p>
                    <code className="
                    text-xs
                    ">{value.time}</code>
                    
                    

                    </div>
                    )
                })}
            </section>
        </div>
    )
}
export default DisplayTodo;