import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState;
    toggleToDo: (id : string) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps); 