export const formatPriority = (value: TodoPriority) => {
  switch (value) {
    case "low":
      return "Baixa";
    case "medium":
      return "Média";
    case "high":
      return "Alta";
    default:
      return value;
  }
};
