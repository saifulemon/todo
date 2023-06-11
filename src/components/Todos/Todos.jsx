import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  return (
    <section>
        {
            props.todos.map((todo) => (
            <Todo key={todo.id} todo={todo}/>
            ))
        }
    </section>
  )
}

export default Todos