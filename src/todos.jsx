import { useState } from "react";
import { editTodo,deleteTodo } from "./actions";
import { useDispatch } from "react-redux";


function Todo({id,title}){

  const [editing,setEditing] =useState("");
  const [newtitle,setNewTitle] =useState(title);
  const dispatch = useDispatch()

  const handleTodo =()=>{
    if(newtitle.trim()){
      dispatch(editTodo({id:id ,title:newtitle}))
      setEditing(false)
    }
  }

  const handleDelete =()=>{
  
    dispatch(deleteTodo(id))
  }



  return(
    <>
    <div className="mt-3  ">
      {
        editing?(
          <div className="mr-3">
            <input type="text" value={newtitle} onChange={(e)=>setNewTitle(e.target.value)} className="border w-96 outline-blue-500 ml-2 pl-2 p-1 "/>
            <button className="border bg-gray-400 px-1 text-white rounded-md"onClick={handleTodo} >save</button>
          </div>
        )
        :(
          <li className="w-96  border ml-[34.5rem]   flex justify-between items-center p-1 " >
            <p className="" >{title}</p>
            <div className="flex gap-2 ">
              <button className="border px-2 bg-yellow-500 text-white rounded-md " onClick={()=>setEditing(true)} >Edit</button>
              <button className="border px-2 bg-red-500 text-white rounded-md" onClick={handleDelete}>Del</button>
            </div>
          </li>
        )
      }
    

    </div>
    </>
  )

}

export default Todo;