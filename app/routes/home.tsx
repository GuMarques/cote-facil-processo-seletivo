import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Processo Seletivo - Cote fácil" },
    {
      name: "description",
      content:
        "Página inicial do processo seletivo Cote Fácil: acesse os três projetos disponíveis.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
