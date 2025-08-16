import { ClipboardList, ImagePlay, SquareKanban } from "lucide-react";
import { Link } from "react-router";

export function Welcome() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
      }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-2 drop-shadow">
        Bem-Vindo
      </h1>
      <span className="text-lg text-gray-600 mb-8">Selecione a aplicação</span>
      <div className="flex items-center justify-center gap-8 flex-col sm:flex-row">
        <Link
          to="/todo"
          className="bg-white shadow-lg border rounded-xl p-8 cursor-pointer hover:bg-indigo-50 flex flex-col items-center w-72 hover:scale-105 transition-all"
        >
          <ClipboardList className="size-16 text-indigo-500 mb-4" />
          <span className="text-xl font-semibold text-gray-700">
            Lista de Tarefas
          </span>
        </Link>
        <Link
          to="/gallery"
          className="bg-white shadow-lg border rounded-xl p-8 cursor-pointer hover:bg-indigo-50 flex flex-col items-center w-72 hover:scale-105 transition-all"
        >
          <ImagePlay className="size-16 text-indigo-500 mb-4" />
          <span className="text-xl font-semibold text-gray-700">
            Galeria de Imagens
          </span>
        </Link>
        <div
          className="bg-white shadow-lg border rounded-xl p-8 cursor-pointer hover:bg-indigo-50 flex flex-col items-center w-72 hover:scale-105 transition-all"
          role="button"
        >
          <SquareKanban className="size-16 text-indigo-500 mb-4" />
          <span className="text-xl font-semibold text-gray-700">
            Dashboard de Tarefas
          </span>
        </div>
      </div>
    </main>
  );
}
