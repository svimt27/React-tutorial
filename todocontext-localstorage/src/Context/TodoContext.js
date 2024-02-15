import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      checked: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  checkedTodo: (id) => {},
});
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
