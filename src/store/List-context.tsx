import React, { useState } from "react";
import Todo from "../components/todos/todo";

export const ListContext = React.createContext<{
  items: Todo[];
  addNote: (text: string) => void;
  deleteNote: (id: string) => void;
}>({
  items: [],
  addNote: (text: string) => {},
  deleteNote: (id: string) => {},
});

const ListContextProvider: React.FC = (porps) => {
  const [todosList, setTodos] = useState<Todo[]>([]);

  const textHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const deleteHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((el) => el.id !== id);
    });
  };

  const contextValue = {
    items: todosList,
    addNote: textHandler,
    deleteNote: deleteHandler,
  };

  return (
    <ListContext.Provider value={contextValue}>
      {porps.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
