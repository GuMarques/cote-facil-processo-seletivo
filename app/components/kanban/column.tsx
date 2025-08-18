import {
  Paper,
  Title,
  Badge,
  Stack,
  Group,
  Text,
  ActionIcon,
} from "@mantine/core";
import { Plus } from "lucide-react";
import { TaskCard } from "./task-card";
import { modals } from "@mantine/modals";
import { TaskModal } from "./task-modal";
import { Droppable } from "@hello-pangea/dnd";
import { useKanban } from "~/context/kanban-context";

export function Column({ column }: { column: Column }) {
  const { addTask } = useKanban();

  const openCreateTaskModal = () => {
    modals.open({
      title: `Cria Nova Tarefa ${column.title}`,
      children: (
        <TaskModal
          task={{
            id: "",
            title: "",
            description: "",
            priority: "medium",
            status: column.id,
            createdAt: new Date(),
            updatedAt: new Date(),
          }}
          onClose={() => modals.closeAll()}
          defaultStatus={column.id}
        />
      ),
      size: "md",
    });
  };

  return (
    <Paper shadow="xl" p="lg" radius="sm" style={{ minHeight: "600px" }}>
      <Group justify="space-between" mb="lg">
        <Group gap="sm">
          <Title order={3} size="h4" fw={700} c="dark.8">
            {column.title}
          </Title>
          <Badge variant="default" radius="xl">
            {column.tasks.length}
          </Badge>
        </Group>
        <ActionIcon
          color="gray"
          size="sm"
          variant="subtle"
          onClick={openCreateTaskModal}
        >
          <Plus size={20} />
        </ActionIcon>
      </Group>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: snapshot.isDraggingOver
                ? "rgba(255, 255, 255, 0.4)"
                : "transparent",
              borderRadius: "12px",
              padding: "8px",
              transition: "all 0.3s ease",
              minHeight: "450px",
              border: snapshot.isDraggingOver
                ? "2px dashed rgba(255, 255, 255, 0.8)"
                : "2px dashed transparent",
            }}
          >
            <Stack gap="md">
              {column.tasks.length === 0 ? (
                <Paper
                  p="xl"
                  shadow="sm"
                  radius="sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    border: "1px dashed rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-white/90"
                >
                  <Text c="dimmed" size="sm" fw={500}>
                    Nenhuma tarefa ainda. Clique no ícone + para adicionar uma.
                  </Text>
                </Paper>
              ) : (
                column.tasks.map((task, index) => (
                  <TaskCard key={task.id} task={task} index={index} />
                ))
              )}
              {provided.placeholder}
            </Stack>
          </div>
        )}
      </Droppable>
    </Paper>
  );
}
