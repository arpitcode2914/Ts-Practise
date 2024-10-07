import React, { useState } from "react";
import TodoData from "./TodoData";

interface TodosType {
  id: number
  todo: string
}
const TodoInput = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodosType[]>([]);

  const handleAddTodo = () => {

    if (todo) {
        const newTodo:TodosType = {
            id:Math.floor(Math.random() * 10000),
            todo
        }

        setTodos([...todos, newTodo]);
        setTodo("");
        console.log(todo);
        
        
    }
    // const randomNum: number = Math.random();
    // console.log("randoom number", randomNum);
   
   
   
  };
  const handleDeleteTodo = ( id: number) =>{

    setTodos(todos.filter((todoItem) =>todoItem.id !== id))
    console.log('todo id',id);
    
    
   
 }
  return (
    <>
      <div>
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="todo..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <div>
        <TodoData todoData={todos} onDelete={handleDeleteTodo}/>
      </div>
    </>
  );
};

export default TodoInput;
