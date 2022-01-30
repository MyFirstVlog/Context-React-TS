import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";

export const Todo = () => {
    //? El contexto sirve para dar informacion de estado entre otros componentes sin necesidad de enviar todo por los props
  return (
      <TodoProvider>
        <h1>Todo: </h1>
        <TodoList />
      </TodoProvider>
  )
};
