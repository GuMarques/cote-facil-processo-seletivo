"use client";

import {
  Title,
  Group,
  Button,
  TextInput,
  Select,
  Badge,
  Flex,
  Paper,
} from "@mantine/core";
import { Plus, Search, Filter, ChartPie, ChevronLeft } from "lucide-react";
import { modals } from "@mantine/modals";
import { useKanban } from "~/context/kanban-context";
import { TaskModal } from "./task-modal";
import { ChartsModal } from "./charts-modal";
import { Link } from "react-router";

export const Header = () => {
  const { filters, setFilters, tasks, getFilteredTasks } = useKanban();

  const openCreateTaskModal = () => {
    modals.open({
      title: "Criar Nova Tarefa",
      children: <TaskModal onClose={() => modals.closeAll()} />,
      size: "md",
    });
  };

  const openChartsModal = () => {
    modals.open({
      size: "100%",
      children: <ChartsModal onClose={() => modals.closeAll()} />,
      title: "Estastísticas do Quadro",
    });
  };

  const filteredTasksCount = getFilteredTasks().length;
  const totalTasksCount = tasks.length;

  return (
    <Paper shadow="lg" p={{ base: "md", sm: "lg" }} mb="xl">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors mb-6"
      >
        <ChevronLeft size={14} />
        Voltar
      </Link>
      <Group justify="space-between" mb="lg" wrap="wrap">
        <div>
          <Title order={1} size="h1" fw={800}>
            Quadro de Tarefas
          </Title>
          <Group gap="xs" mt="xs" wrap="wrap">
            <Badge>
              {filteredTasksCount} de {totalTasksCount} tarefas
            </Badge>
            <Badge color="green">
              {tasks.filter((t) => t.status === "done").length} concluídas
            </Badge>
          </Group>
        </div>
        <Group mb="lg" wrap="wrap">
          <Button
            leftSection={<ChartPie size={18} />}
            onClick={openChartsModal}
            size="xs"
            color="orange"
            variant="filled"
          >
            Estastísticas
          </Button>
          <Button
            leftSection={<Plus size={18} />}
            onClick={openCreateTaskModal}
            size="xs"
            variant="filled"
          >
            Nova Tarefa
          </Button>
        </Group>
      </Group>

      <Flex gap="md" wrap="wrap" align="end">
        <TextInput
          placeholder="Pesquisar tarefa..."
          leftSection={<Search size={16} />}
          value={filters.search}
          onChange={(event) =>
            setFilters({ search: event.currentTarget.value })
          }
          style={{ minWidth: 200, flex: 1 }}
          size="xs"
        />

        <Select
          placeholder="Prioridade"
          leftSection={<Filter size={16} />}
          value={filters.priority}
          onChange={(value) => setFilters({ priority: value as any })}
          data={[
            { value: "all", label: "Todas Prioridades" },
            { value: "high", label: "Alta Prioridade" },
            { value: "medium", label: "Média Prioridade" },
            { value: "low", label: "Baixa Prioridade" },
          ]}
          style={{ minWidth: 140 }}
          size="xs"
        />

        <Select
          placeholder="Estado"
          leftSection={<Filter size={16} />}
          value={filters.status}
          onChange={(value) => setFilters({ status: value as any })}
          data={[
            { value: "all", label: "Todos os Estados" },
            { value: "todo", label: "Pendente" },
            { value: "doing", label: "Em Progresso" },
            { value: "done", label: "Concluído" },
          ]}
          style={{ minWidth: 130 }}
          size="xs"
        />

        {(filters.search ||
          filters.priority !== "all" ||
          filters.status !== "all") && (
          <Button
            variant="light"
            onClick={() =>
              setFilters({ search: "", priority: "all", status: "all" })
            }
            radius="sm"
            size="xs"
          >
            Limpar
          </Button>
        )}
      </Flex>
    </Paper>
  );
};
