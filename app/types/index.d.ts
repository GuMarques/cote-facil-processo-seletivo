type TodoPriority = "low" | "medium" | "high";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  priority: TodoPriority;
};
