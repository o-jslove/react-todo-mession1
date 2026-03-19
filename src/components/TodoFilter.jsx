const FILTERS = ["전체", "진행중", "완료"];

export default function TodoFilter({ filter, setFilter }) {
  return (
    <div className="flex gap-2 mb-3.5">
      {FILTERS.map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => setFilter(f)}
          className="px-3.5 py-1.5 rounded-full text-[13px] cursor-pointer transition-all"
          style={
            filter === f
              ? {
                  background: "rgba(108,99,255,0.3)",
                  border: "1px solid #6c63ff",
                  color: "#a78bfa",
                  fontWeight: 600,
                }
              : {
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#aaa",
                }
          }
        >
          {f}
        </button>
      ))}
    </div>
  );
}
