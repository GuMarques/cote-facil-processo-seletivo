import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";
import { Input } from "../ui/input";
import { SearchFilters } from "./search-filters";

interface HomeHeaderProps {
  query: string;
  setQuery: (query: string) => void;
}

export const HomeHeader = ({ setQuery, query }: HomeHeaderProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors mb-6"
      >
        <ChevronLeft size={14} />
        Voltar
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Galeria de Imagens
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          Vitrine de Imagens Profissionais
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between items-center gap-4 w-full max-w-2xl">
          <Input
            value={query}
            className="flex-1 bg-white"
            placeholder="Pesquise fotos"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
