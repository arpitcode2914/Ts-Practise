import React, { useState } from 'react'

interface TodosType {
  id: number
  todo: string
}
interface TodoType {
  todoData: TodosType[] // Array of TodosType
  onDelete:(id:number) => void
}
// interface TodosType{
//     todos:string
// }

const TodoData = ({todoData,onDelete}:TodoType) =>{

  console.log("todo data",todoData);
  
  //  const handleDeleteTodo = ( id: number) =>{
  //     console.log('todo id',id);
     
  //  }
   
//    const [todos,setTodos] = useState<string[]>([todoData])
    
  return (
    <div>
       {
            todoData.map((todo,index) =>(
                <div key={index}>
                    <h1 >{todo.todo}</h1>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>

                </div>
            ))
       }
    </div>
  )
}

export default TodoData