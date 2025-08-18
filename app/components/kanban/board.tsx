import { Column } from "./column";
import { SimpleGrid } from "@mantine/core";
import { useKanban } from "~/context/kanban-context";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";

export function Board() {
  const { columns, moveTask } = useKanban();

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    moveTask(draggableId, destination.droppableId as any, destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing="md"
        style={{ alignItems: "start" }}
      >
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </SimpleGrid>
    </DragDropContext>
  );
}
