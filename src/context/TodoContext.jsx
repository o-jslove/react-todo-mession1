import { createContext, useContext, useRef, useState } from "react";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", checked: true },
    { id: 2, text: "컴포넌트 분리 연습", checked: false },
    { id: 3, text: "운동하기", checked: false },
  ]);
  const nextId = useRef(4);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: nextId.current++, text: text.trim(), checked: false },
    ]);
  };

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const toggleChecked = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );

  const editTodo = (id, newText) => {
    if (!newText.trim()) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText.trim() } : t)),
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleChecked, editTodo }}
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
