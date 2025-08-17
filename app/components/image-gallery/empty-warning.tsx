import { ImageOff, Search } from "lucide-react";

export const EmptyWarning = () => {
  return (
    <div className="col-span-3 flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
      <div className="relative mb-6">
        <ImageOff className="w-24 h-24 text-gray-300" />
        <Search className="w-8 h-8 text-gray-400 absolute -bottom-2 -right-2 bg-white rounded-full p-1 border-2 border-gray-200" />
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        Nenhuma imagem encontrada
      </h3>
      <p className="text-gray-500 text-center max-w-md">
        Parece que não conseguimos encontrar nenhuma imagem com os critérios de
        busca atuais. Tente ajustar seus filtros ou termos de pesquisa.
      </p>
    </div>
  );
};
