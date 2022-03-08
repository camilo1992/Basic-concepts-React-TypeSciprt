import React from "react";
import { useRef } from "react";
import classes from "./FormList.module.css";
import { ListContext } from "../store/List-context";
import { useContext } from "react";

const FormList = () => {
  const inputData = useRef<HTMLInputElement>(null);
  const listCtx = useContext(ListContext);

  const submmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const inputText = inputData.current!.value;

    if (inputText.trim().length === 0) return;
    // We add it to the to do list.
    console.log(inputText);
    listCtx.addNote(inputText);
  };

  return (
    <form className={classes.form} onSubmit={submmitHandler}>
      <label htmlFor="text">Enter text</label>
      <input id="terxt" type="text" ref={inputData}></input>
      <button>Submit text</button>
    </form>
  );
};

export default FormList;
