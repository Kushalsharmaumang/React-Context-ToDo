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
    let cardRef = useRef(card);
    
    let handleCardClick =(value,titleRef,descRef)=>{
        // console.log(value);
        setEditCardId(value.id);
        setEditTitle(value.title);
        setEditDesc(value.description);
        titleRef.current.value=value.title;
        descRef.current.value=value.description;
    };

    let [color, setColor] = useState("");
    let handleColor=()=>{
        console.log(color);
        console.log(card.target.classList);
        card.target.classList.add(color);
        cardRef.current.classList.add(color);
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
                    text-3xl
                    rounded-lg px-2
                    "
                    onClick={()=>{handleDelete(editCardId);
                        editBoxRef.current.classList.add("hidden");
                    }}
                    >🗑️</button>
{/* color input */}
                <input type="color" 
                    onChange={(e)=>{
                        console.log(e.target.value);
                        setColor(`bg-[${e.target.value}]`);
                        // editBoxRef.current.classList.add("hidden");
                    }}
                    className="
                    self-end
                    text-3xl
                    rounded-lg px-2
                    "/>
{/* edit button click */}
                <button
                    onClick={(e)=>{
                        handleColor();
                        handleEdit(editCardId,editTitle,editDesc);
                        editBoxRef.current.classList.add("hidden");
                    }}
                    className="
                    self-end
                    text-3xl
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
                    w-[45%] sm:w-[100%]
                    p-1
                    border rounded
                    flex flex-col justify-center items-center
                    "
                    ref={cardRef}
// card click
                    onClick={(e)=>{
                        handleCardClick(value,editTitleRef,editDescRef);
                        editBoxRef.current.classList.remove("hidden");
                        setCard(e);
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