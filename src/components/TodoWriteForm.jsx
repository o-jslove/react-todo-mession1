import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoWriteForm() {
  const { addTodo } = useTodos();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="flex-1 px-3.5 py-2.5 rounded-[10px] text-sm text-white outline-none"
        style={{
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <button
        type="submit"
        className="px-[18px] py-2.5 rounded-[10px] text-white font-semibold text-sm cursor-pointer whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg, #6c63ff, #a78bfa)",
          border: "none",
        }}
      >
        + 추가
      </button>
    </form>
  );
}
