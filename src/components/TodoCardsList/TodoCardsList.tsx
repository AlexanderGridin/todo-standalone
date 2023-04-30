import { Fab } from "components/Fab";
import { TodoCard } from "components/TodoCard";
import { TodoItem } from "models";

interface TodoCardsListProps {
  todos: TodoItem[];
  isShowAddButton?: boolean;
}

export const TodoCardsList = ({ todos, isShowAddButton = true }: TodoCardsListProps) => {
  return todos.length ? (
    <>
      <ul className={`list-plain`}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoCard todo={todo} />
          </li>
        ))}
      </ul>

      {isShowAddButton && (
        <>
          <Fab tooltipText="Add todo" onClick={() => console.log("Add todo")} />
        </>
      )}
    </>
  ) : (
    <>
      <h2 style={{ color: "#FFF", textAlign: "center" }}>You don't have any todos...</h2>

      {isShowAddButton && (
        <>
          <Fab tooltipText="Add todo" onClick={() => console.log("Add todo")} />
        </>
      )}
    </>
  );
};
