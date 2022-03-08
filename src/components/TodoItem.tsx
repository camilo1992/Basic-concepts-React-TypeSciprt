import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; deleteText: (text: any) => void }> = (
  props
) => {
  return (
    <li onClick={props.deleteText} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
