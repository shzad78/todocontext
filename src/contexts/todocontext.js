import { useContext, createContext } from "react";

export const TodoContext = createContext({});

export const Todoprovider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};
