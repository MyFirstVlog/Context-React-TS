import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces";

interface TodoItemProp {
    todo: Todo
}


export const TodoItem = ({todo}: TodoItemProp) => {

    // const {toggleToDo} = useContext(TodoContext);

    const {toggleToDo} = useTodos();

    // const handleDbClick = () => {
    //     console.log('handleDbClick', todo.desc);
    //     toggleToDo(todo.id);
    // }

  return(
    <li 
        onDoubleClick={() => toggleToDo(todo.id)}
        style={{cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : ''}}
    >
          {todo.desc}
      </li>
  )
};
