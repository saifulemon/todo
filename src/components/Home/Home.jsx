import React from "react"
import Todos from "../Todos/Todos";

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
    <>
        <Todos todos={dummyTodos} />
    </>
  )
}

export default Home;