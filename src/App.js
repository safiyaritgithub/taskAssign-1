import { useState } from "react";
import { useDispatch } from "react-redux";
import  {addTodo} from './actions'
import TodoList from "./todoList";



function App() {
const dispatch = useDispatch();

const [todoTitle,setTodoTitle]= useState("")

const handleTodo =()=>{
  if(todoTitle.trim()){
    const newTodo ={
      title:todoTitle
    }
    dispatch(addTodo(newTodo))
    setTodoTitle("")
  }

}


  return (
    <div className="app  mt-3  text-center ">
      <div className="">
      <h3 className="text-2xl font-semibold text-blue-500">Todo app using redux react</h3>
      <div className="mt-4 ">
        <input type="text" className="border w-96 outline-blue-300 p-[1px] pl-1" value={todoTitle} onChange={(e)=>{setTodoTitle(e.target.value)}}/>
        <button className="border bg-blue-500 text-white font-medium px-2 "onClick={()=>handleTodo()} >Add</button>
      </div>
      </div>
      
      <TodoList/>
    </div>
  );
}

export default App;
