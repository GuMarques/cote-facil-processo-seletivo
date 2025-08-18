import type { Route } from "./+types/home";
import { ToDoList } from "~/pages/to-do-list/to-do-list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cote fácil - To-Do List" },
    {
      name: "description",
      content:
        "Organize suas tarefas de forma simples e eficiente com a To-Do List.",
    },
  ];
}

export default function ToDo() {
  return <ToDoList />;
}
