import { Box, Container } from "@mantine/core";
import { Board } from "~/components/kanban/board";
import { Header } from "~/components/kanban/header";

export const KanbanBoard = () => {
  return (
    <Box
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Container
        size="xl"
        py={{ base: "md", sm: "lg", md: "xl" }}
        px={{ base: "sm", sm: "md" }}
      >
        <Header />
        <Board />
      </Container>
    </Box>
  );
};
