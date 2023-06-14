// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./Todo.module.css";

const Todo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, desc } = props.todo;
  // eslint-disable-next-line react/prop-types
  const { id } = props;

  const handleClick = (id) => {
    // eslint-disable-next-line no-undef, react/prop-types
    props.onRemoveItem(id)
  };

  return (
    <article className={style.todo}>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div>
        <button className={style.btn} onClick={() => handleClick(id)}>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
