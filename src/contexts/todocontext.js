import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "1st message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};
