import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import TodoWriteForm from "./components/TodoWriteForm";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <div
        className="min-h-screen flex items-center justify-center p-5"
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >
        <div
          className="w-full max-w-[480px] rounded-3xl p-9"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          }}
        >
          <h1 className="text-[28px] font-bold text-white text-center mb-5">
            📝 Todo
          </h1>
          <TodoStats />
          <TodoWriteForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}
