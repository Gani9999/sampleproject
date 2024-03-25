import Todo from "./Todo";
const TodoContainer=({todos, delTodos})=>{

    return(
        <div className="container">
                {todos.map((todo,index)=>{
                    return(
                        <Todo todo={todo} index={index} delTodos={delTodos}/>
                    )
                })}
            </div>
    )
}

export default TodoContainer;