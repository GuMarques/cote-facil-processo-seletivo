import { useState } from "react";
import {
  TextInput,
  Textarea,
  Select,
  Button,
  Group,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useKanban } from "~/context/kanban-context";

interface TaskModalProps {
  task?: Task;
  onClose: () => void;
  defaultStatus?: TaskStatus;
}

export function TaskModal({ task, onClose, defaultStatus }: TaskModalProps) {
  const { addTask, updateTask } = useKanban();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      title: task?.title || "",
      description: task?.description || "",
      priority: task?.priority || ("medium" as Priority),
      status: task?.status || defaultStatus || ("todo" as TaskStatus),
    },
    validate: {
      title: (value) =>
        value.trim().length < 1 ? "O Título é obrigatório" : null,
      description: (value) =>
        value.trim().length < 1 ? "A descrição é obrigatória" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      if (task && task.id) {
        updateTask(task.id, values);
        notifications.show({
          title: "Success",
          message: "Tarefa atualizada!",
          color: "green",
        });
      } else {
        addTask(values);
        notifications.show({
          title: "Success",
          message: "Tarefa criada!",
          color: "green",
        });
      }
      onClose();
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Algo deu errado ao salvar a tarefa.",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <TextInput
          label="Título"
          placeholder="Adicione o título da tarefa"
          required
          {...form.getInputProps("title")}
        />

        <Textarea
          label="Descrição"
          placeholder="Adicione uma descrição para a tarefa"
          required
          minRows={3}
          {...form.getInputProps("description")}
        />

        <Select
          label="Prioridade"
          required
          data={[
            { value: "low", label: "Baixa Prioridade" },
            { value: "medium", label: "Média Prioridade" },
            { value: "high", label: "Alta Prioridade" },
          ]}
          {...form.getInputProps("priority")}
        />

        <Select
          label="Status"
          required
          data={[
            { value: "todo", label: "Pendente" },
            { value: "doing", label: "Em Andamento" },
            { value: "done", label: "Concluída" },
          ]}
          {...form.getInputProps("status")}
        />

        <Group justify="flex-end" mt="md">
          <Button variant="light" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" loading={loading}>
            {task && task.id ? "Atualizar Tarefa" : "Criar Tarefa"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
