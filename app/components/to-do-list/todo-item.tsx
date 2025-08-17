import { useState } from "react";
import { formatPriority } from "~/utils";
import { useLocalStorage } from "@uidotdev/usehooks";
import { X, Trash, Check, Pencil } from "lucide-react";
import {
  Item,
  Input,
  ItemText,
  Checkbox,
  ListButton,
  PriorityBadge,
  PrioritySelect,
} from "~/components/to-do-list/styles";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const [editText, setEditText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editPriority, setEditPriority] = useState<TodoPriority>("low");

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (todo: Todo) => {
    setIsEditing(true);
    setEditText(todo.text);
    setEditPriority(todo.priority);
  };

  const saveEdit = (id: number) => {
    if (!editText.trim()) return;
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: editText.trim(), priority: editPriority }
          : todo
      )
    );
    setEditText("");
    setIsEditing(false);
    setEditPriority("low");
  };

  const cancelEdit = () => {
    setEditText("");
    setIsEditing(false);
    setEditPriority("low");
  };

  return (
    <Item>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        title={
          todo.completed ? "Desmarcar como concluída" : "Marcar como concluído"
        }
      />
      {isEditing ? (
        <>
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ width: "50%" }}
          />
          <PrioritySelect
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value as TodoPriority)}
          >
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </PrioritySelect>
          <ListButton
            bgColor="#e00"
            title="Cancelar"
            hoverBgColor="#a00"
            onClick={cancelEdit}
          >
            <X size={14} />
          </ListButton>
          <ListButton
            title="Salvar"
            bgColor="#28a745"
            hoverBgColor="#28a746e2"
            onClick={() => saveEdit(todo.id)}
          >
            <Check size={14} />
          </ListButton>
        </>
      ) : (
        <>
          <ItemText completed={todo.completed}>{todo.text}</ItemText>
          <PriorityBadge priority={todo.priority}>
            {formatPriority(todo.priority)}
          </PriorityBadge>
          <ListButton
            title="Editar"
            bgColor="#0d6efd"
            hoverBgColor="#0a58ca"
            onClick={() => startEdit(todo)}
          >
            <Pencil size={14} />
          </ListButton>
          <ListButton
            title="Excluir"
            bgColor="#e00"
            hoverBgColor="#a00"
            onClick={() => removeTodo(todo.id)}
          >
            <Trash size={14} />
          </ListButton>
        </>
      )}
    </Item>
  );
};
