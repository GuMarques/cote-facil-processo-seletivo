import { PieChart } from "@mantine/charts";
import { useKanban } from "~/context/kanban-context";
import { Button, ColorSwatch, Flex, Paper, Title } from "@mantine/core";

export const ChartsModal = ({ onClose }: { onClose: () => void }) => {
  const { tasks } = useKanban();

  const todoTasks = tasks.filter((task) => task.status === "todo").length;
  const doingTasks = tasks.filter((task) => task.status === "doing").length;
  const doneTasks = tasks.filter((task) => task.status === "done").length;

  const lowPriorityTasks = tasks.filter(
    (task) => task.priority === "low"
  ).length;
  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "medium"
  ).length;
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "high"
  ).length;

  const statusData = [
    { name: "Pendente", value: todoTasks, color: "#ffd43b" },
    { name: "Em Andamento", value: doingTasks, color: "#74c0fc" },
    { name: "Concluído", value: doneTasks, color: "#51cf66" },
  ];

  const priorityData = [
    { name: "Baixa", value: lowPriorityTasks, color: "#51cf66" },
    { name: "Média", value: mediumPriorityTasks, color: "#ffd43b" },
    { name: "Alta", value: highPriorityTasks, color: "#ff6b6b" },
  ];

  return (
    <div className="space-y-4">
      <Flex gap="md">
        <Paper p="md" withBorder className="flex-1 space-y-2">
          <Title order={5} mb="md" fw={500} className="text-center">
            Distribuição de Status das Tarefas
          </Title>

          <PieChart
            withLabelsLine
            labelsPosition="inside"
            labelsType="percent"
            withLabels
            data={statusData}
            withTooltip
            tooltipDataSource="segment"
            strokeWidth={0}
            mx={"auto"}
          />
          <Flex justify={"center"} gap={"sm"}>
            {statusData.map((entry, index) => (
              <Flex align="center" key={index}>
                <ColorSwatch size={10} color={entry.color} />
                <span className="ml-1">{entry.name}</span>
              </Flex>
            ))}
          </Flex>
        </Paper>

        <Paper p="md" withBorder className="flex-1 space-y-2">
          <Title order={5} mb="md" fw={500} className="text-center">
            Distribuição de Prioridade das Tarefas
          </Title>
          <PieChart
            withLabelsLine
            labelsPosition="inside"
            labelsType="percent"
            withLabels
            strokeWidth={0}
            data={priorityData}
            withTooltip
            tooltipDataSource="segment"
            mx={"auto"}
          />
          <Flex justify={"center"} gap={"sm"}>
            {priorityData.map((entry, index) => (
              <Flex align="center" key={index}>
                <ColorSwatch size={10} color={entry.color} />
                <span className="ml-1">{entry.name}</span>
              </Flex>
            ))}
          </Flex>
        </Paper>
      </Flex>
      <Flex justify="flex-end">
        <Button onClick={onClose} variant="default">
          Fechar
        </Button>
      </Flex>
    </div>
  );
};
