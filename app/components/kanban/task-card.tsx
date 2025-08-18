import {
  Paper,
  Text,
  Badge,
  Group,
  ActionIcon,
  Menu,
  Stack,
} from "@mantine/core";
import { Draggable } from "@hello-pangea/dnd";
import {
  MoreVertical,
  Edit,
  Trash2,
  Clock,
  AlertCircle,
  GripVertical,
  Skull,
} from "lucide-react";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { TaskModal } from "./task-modal";
import { useKanban } from "~/context/kanban-context";

interface TaskCardProps {
  task: Task;
  index: number;
}

const priorityConfig = {
  low: {
    icon: Clock,
    color: "blue",
    label: "Baixa",
  },
  medium: {
    label: "Média",
    color: "yellow",
    icon: AlertCircle,
  },
  high: {
    icon: Skull,
    color: "red",
    label: "Alta",
  },
} as const;

export function TaskCard({ task, index }: TaskCardProps) {
  const { deleteTask } = useKanban();
  const priority = priorityConfig[task.priority];
  const PriorityIcon = priority.icon;

  const openEditModal = () => {
    modals.open({
      title: "Edit Task",
      children: <TaskModal task={task} onClose={() => modals.closeAll()} />,
      size: "md",
    });
  };

  const handleDelete = () => {
    modals.openConfirmModal({
      title: "Delete Task",
      children: (
        <Text size="sm">
          Are you sure you want to delete "{task.title}"? This action cannot be
          undone.
        </Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: () => {
        deleteTask(task.id);
        notifications.show({
          title: "Task Deleted",
          message: "Task has been successfully deleted",
          color: "red",
        });
      },
    });
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          shadow={"sm"}
          p="md"
          radius="sm"
          style={{
            border: snapshot.isDragging
              ? "2px solid #4dabf7"
              : "1px solid #e9ecef",
            cursor: "pointer",
            ...provided.draggableProps.style,
          }}
        >
          <Stack gap="sm">
            <Group justify="space-between" align="flex-start">
              <Group gap="xs" style={{ flex: 1 }}>
                <div
                  {...provided.dragHandleProps}
                  style={{
                    cursor: "grab",
                    color: "#868e96",
                    padding: "2px",
                    borderRadius: "4px",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:bg-gray-100 hover:text-blue-500"
                >
                  <GripVertical size={16} />
                </div>
                <Text
                  fw={600}
                  size="sm"
                  style={{ flex: 1, lineHeight: 1.5 }}
                  c="dark.8"
                >
                  {task.title}
                </Text>
              </Group>
              <Menu shadow="lg" width={160} radius="sm">
                <Menu.Target>
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    size="sm"
                    radius="sm"
                  >
                    <MoreVertical size={14} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<Edit size={14} />}
                    onClick={openEditModal}
                  >
                    Editar Tarefa
                  </Menu.Item>
                  <Menu.Item
                    leftSection={<Trash2 size={14} />}
                    color="red"
                    onClick={handleDelete}
                  >
                    Excluir Tarefa
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>

            <Text size="xs" c="dimmed" style={{ lineHeight: 1.5 }}>
              {task.description}
            </Text>

            <Group justify="space-between" align="center">
              <Badge
                size="sm"
                radius="md"
                variant="filled"
                color={priority.color}
                style={{ fontWeight: 600 }}
                leftSection={<PriorityIcon size={12} />}
              >
                {priority.label}
              </Badge>
              <Text size="xs" c="dimmed" fw={500}>
                {formatDate(task.updatedAt)}
              </Text>
            </Group>
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
}
