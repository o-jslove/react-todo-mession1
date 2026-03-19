import { useTodos } from "../context/TodoContext";

export default function TodoStats() {
  const { todos } = useTodos();
  const done = todos.filter((t) => t.checked).length;
  const total = todos.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="text-[13px] text-[#aaa] whitespace-nowrap">
        {done} / {total} 완료
      </span>
      <div
        className="flex-1 h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-[400ms]"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #6c63ff, #a78bfa)",
          }}
        />
      </div>
      <span className="text-[13px] font-semibold text-[#a78bfa] min-w-[32px]">
        {pct}%
      </span>
    </div>
  );
}
