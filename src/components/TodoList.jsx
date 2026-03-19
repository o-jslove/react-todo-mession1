import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodos();
  const [filter, setFilter] = useState("전체");

  const filtered = todos.filter((t) => {
    if (filter === "진행중") return !t.checked;
    if (filter === "완료") return t.checked;
    return true;
  });

  return (
    <div>
      <TodoFilter filter={filter} setFilter={setFilter} />
      {filtered.length === 0 ? (
        <p className="text-[#666] text-center py-6 text-sm">
          할 일이 없어요 🎉
        </p>
      ) : (
        <ul className="flex flex-col gap-2 list-none p-0 m-0">
          {filtered.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}
