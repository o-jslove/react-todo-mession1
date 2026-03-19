export default function TodoSearch({ search, setSearch }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-zinc-500 pointer-events-none">
        🔍
      </span>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색..."
        className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-xl pl-9 pr-8 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
      />
      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  );
}
