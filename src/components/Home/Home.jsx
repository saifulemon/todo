// eslint-disable-next-line no-unused-vars
import React from "react"
import Todos from "../Todos/Todos";
import style from "./Home.module.css"

const dummyTodos = [
  {
    id: 1,
    title: "todos title 1",
    desc: "todo1 description is here ..."
  },
  {
    id: 2,
    title: "todos title 2",
    desc: "todo2 description is here ..."
  }
];

const Home = () => {

  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <Todos todos={dummyTodos} />
    </div>
  )
}

export default Home;