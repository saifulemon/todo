// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import NewTodo from "../Todos/NewTodo";
import Todos from "../Todos/Todos";
import style from "./Home.module.css"
import { v4 as uuidv4 } from "uuid";


const Home = () => {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
      setTodos((prevTodos) => {
        return [ ...prevTodos, {id:uuidv4(), todo}]
      })
  };

  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
        <Todos todos={todos} />
    </div>
  )
}

export default Home;