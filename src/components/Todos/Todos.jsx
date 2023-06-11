// eslint-disable-next-line no-unused-vars
import React from 'react'
import Todo from './Todo';
import style from "./Todos.module.css";

const Todos = (props) => {
  return (
    <section className={style.todos}>
        {
            // eslint-disable-next-line react/prop-types
            props.todos.map((todo) => (
            <Todo key={todo.id} todo={todo}/>
            ))
        }
    </section>
  )
}

export default Todos