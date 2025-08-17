import React, { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { TodoItem } from "~/components/to-do-list/todo-item";
import {
  Clipboard,
  ChevronLeft,
  PlusCircle,
  PackageOpen,
  ClipboardList,
  ClipboardCheck,
} from "lucide-react";
import {
  Form,
  List,
  Main,
  Input,
  Title,
  Button,
  Container,
  ListTitle,
  EmptyAlert,
  StyledLink,
  PrioritySelect,
  EmptyAlertText,
  CompletedSection,
} from "~/components/to-do-list/styles";

export function ToDoList() {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState<TodoPriority>("low");
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false, priority },
    ]);
    setInput("");
    setPriority("low");
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <Main>
      <Container>
        <StyledLink
          to="/"
          className="flex gap-[2px] text-sm items-center cursor-pointer mb-2 text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft size={14} />
          <span>Voltar</span>
        </StyledLink>
        <Title>
          <ClipboardList size={32} />
          Todo List
        </Title>
        <Form onSubmit={addTodo}>
          <Input
            value={input}
            placeholder="Adicionar tarefa..."
            onChange={(e) => setInput(e.target.value)}
          />
          <PrioritySelect
            value={priority}
            onChange={(e) => setPriority(e.target.value as TodoPriority)}
          >
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </PrioritySelect>
          <Button type="submit">
            <PlusCircle size={20} />
          </Button>
        </Form>
        <ListTitle>
          <Clipboard />A fazer
        </ListTitle>
        <List>
          {activeTodos.length === 0 ? (
            <EmptyAlert>
              <PackageOpen size={48} />
              <EmptyAlertText>Nenhuma tarefa a fazer.</EmptyAlertText>
            </EmptyAlert>
          ) : (
            activeTodos.map((todo) => <TodoItem todo={todo} />)
          )}
        </List>
        <CompletedSection>
          <ListTitle>
            <ClipboardCheck />
            Concluídas
          </ListTitle>
          <List>
            {completedTodos.length === 0 ? (
              <EmptyAlert>
                <PackageOpen size={48} />
                <EmptyAlertText>Nenhuma tarefa concluída.</EmptyAlertText>
              </EmptyAlert>
            ) : (
              completedTodos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
              ))
            )}
          </List>
        </CompletedSection>
      </Container>
    </Main>
  );
}
