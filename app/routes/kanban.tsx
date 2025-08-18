import { KanbanBoard } from "~/pages/kanban";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cote fácil - Kanban Board" },
    {
      name: "description",
      content: "Gerencie suas tarefas de forma eficiente com o Kanban Board.",
    },
  ];
}

export default function Kanban() {
  return <KanbanBoard />;
}
