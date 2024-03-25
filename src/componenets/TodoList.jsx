import { useState } from "react";
import "./Todo.css";
import InputContainer from "./InputContainer";
import TodoContainer from "./TodoContainer";

const TodoList=()=>{
    const[inputVal, setInputVal]=useState('')
    const[todos, setTodos]=useState([])

    function writeTodo(e){
        setInputVal(e.target.value);
    }

    function addTodo(){
        if(inputVal!=''){
            setTodos((prevTodos)=>[...todos,inputVal])
            setInputVal('')
        }
    }

    function delTodos(todoIndex){
        setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
            return prevTodosIndex!=todoIndex
        }))
    }
    console.log(todos);
    return(
        <main>
            <h1>ToDo List</h1>

            <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
            <TodoContainer todos={todos} delTodos={delTodos}/>
            
        </main>
    )
}

export default TodoList;