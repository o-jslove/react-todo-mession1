import { createContext, useContext, useRef, useState } from "react";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부하기",
      checked: true,
      priority: "high",
      dueDate: "2025-03-25",
    },
    {
      id: 2,
      text: "컴포넌트 분리 연습",
      checked: false,
      priority: "medium",
      dueDate: "2025-03-22",
    },
    { id: 3, text: "운동하기", checked: false, priority: "low", dueDate: "" },
  ]);
  const nextId = useRef(4);

  const addTodo = (text, priority = "medium", dueDate = "") => {
    if (!text.trim()) return;
    setTodos((prev) => [
      {
        id: nextId.current++,
        text: text.trim(),
        checked: false,
        priority,
        dueDate,
      },
      ...prev,
    ]);
  };

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const toggleChecked = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );

  const editTodo = (id, updates) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    );

  const toggleAll = () => {
    const allChecked = todos.every((t) => t.checked);
    setTodos((prev) => prev.map((t) => ({ ...t, checked: !allChecked })));
  };

  const clearCompleted = () =>
    setTodos((prev) => prev.filter((t) => !t.checked));

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleChecked,
        editTodo,
        toggleAll,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos must be used within TodoProvider");
  return context;
}
