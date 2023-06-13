// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import style from "./NewTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((previousTodo) => {
      return { ...previousTodo, [name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.onAddTodo(todo);
    setTodo({
      title: "",
      desc: "",
    });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Ttile</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description</label>
        <textarea
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
