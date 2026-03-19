import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { removeTodo, toggleChecked, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) editTodo(todo.id, editValue);
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleEdit();
    if (e.key === "Escape") {
      setEditValue(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li
      className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl transition-opacity"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.07)",
        opacity: todo.checked ? 0.5 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleChecked(todo.id)}
        className="w-4 h-4 shrink-0 cursor-pointer accent-[#6c63ff]"
      />

      {isEditing ? (
        <input
          autoFocus
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 text-sm text-white px-2 py-1 rounded-md outline-none"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid #6c63ff",
          }}
        />
      ) : (
        <span
          className="flex-1 text-sm text-[#e2e8f0]"
          style={{ textDecoration: todo.checked ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-1">
        <button
          type="button"
          onClick={handleEdit}
          className="text-sm px-1.5 py-1 rounded-md cursor-pointer bg-transparent border-none text-[#a78bfa]"
          title={isEditing ? "저장" : "수정"}
        >
          {isEditing ? "✓" : "✏️"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setEditValue(todo.text);
              setIsEditing(false);
            }}
            className="text-sm px-1.5 py-1 rounded-md cursor-pointer bg-transparent border-none text-[#aaa]"
          >
            ✕
          </button>
        )}
        {!isEditing && (
          <button
            type="button"
            onClick={() => removeTodo(todo.id)}
            className="text-sm px-1.5 py-1 rounded-md cursor-pointer bg-transparent border-none text-[#f87171]"
          >
            🗑️
          </button>
        )}
      </div>
    </li>
  );
}
