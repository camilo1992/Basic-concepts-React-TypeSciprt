import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { ListContext } from "../store/List-context";
import { useContext } from "react";

const Todos = () => {
  const listCtx = useContext(ListContext);

  return (
    <ul className={classes.todos}>
      {listCtx.items.map((item) => (
        <TodoItem
          deleteText={listCtx.deleteNote.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
