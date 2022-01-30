import { TodoItem } from "../context/TodoItem";
import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {

    // const {todoState} = useContext(TodoContext);

    // const {todos} = todoState;
    const {todos} = useTodos();

    console.log(todos);

  return(
    <ul>
        {todos.map((todo, index) => <TodoItem key={todo.id} todo={todo}/>)}
    </ul>
  )
};
