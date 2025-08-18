import type React from "react";
import { createContext, useContext, useReducer, useCallback } from "react";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Configurar ambiente de desenvolvimento",
    description: "Instalar Node.js, configurar editor e dependências iniciais",
    priority: "high",
    status: "done",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "2",
    title: "Criar estrutura do projeto",
    description: "Definir arquitetura de pastas e arquivos principais",
    priority: "medium",
    status: "done",
    createdAt: new Date("2024-01-11"),
    updatedAt: new Date("2024-01-11"),
  },
  {
    id: "3",
    title: "Implementar autenticação de usuários",
    description: "Adicionar login, registro e proteção de rotas",
    priority: "high",
    status: "doing",
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-13"),
  },
  {
    id: "4",
    title: "Criar banco de dados",
    description: "Modelar entidades e configurar conexão com o banco",
    priority: "high",
    status: "todo",
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13"),
  },
  {
    id: "5",
    title: "Desenvolver API REST",
    description: "Criar endpoints para CRUD de usuários e produtos",
    priority: "high",
    status: "doing",
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "6",
    title: "Implementar testes automatizados",
    description: "Adicionar testes unitários e de integração",
    priority: "medium",
    status: "todo",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "7",
    title: "Criar layout responsivo",
    description: "Garantir que o site funcione bem em dispositivos móveis",
    priority: "high",
    status: "done",
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-17"),
  },
  {
    id: "8",
    title: "Configurar deploy automático",
    description: "Integrar CI/CD para publicação contínua",
    priority: "medium",
    status: "todo",
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
  },
  {
    id: "9",
    title: "Documentar API",
    description: "Gerar documentação dos endpoints e exemplos de uso",
    priority: "low",
    status: "todo",
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
  },
  {
    id: "10",
    title: "Implementar upload de arquivos",
    description: "Permitir envio de imagens e documentos pelo usuário",
    priority: "medium",
    status: "done",
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19"),
  },
  {
    id: "11",
    title: "Adicionar sistema de notificações",
    description: "Notificar usuários sobre eventos importantes",
    priority: "low",
    status: "done",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: "12",
    title: "Criar painel administrativo",
    description: "Dashboard para gerenciamento de usuários e dados",
    priority: "high",
    status: "doing",
    createdAt: new Date("2024-01-21"),
    updatedAt: new Date("2024-01-22"),
  },
  {
    id: "13",
    title: "Configurar autenticação via OAuth",
    description: "Permitir login com Google e Facebook",
    priority: "medium",
    status: "doing",
    createdAt: new Date("2024-01-22"),
    updatedAt: new Date("2024-01-22"),
  },
  {
    id: "14",
    title: "Implementar cache de dados",
    description: "Melhorar performance utilizando cache local e server-side",
    priority: "low",
    status: "doing",
    createdAt: new Date("2024-01-23"),
    updatedAt: new Date("2024-01-23"),
  },
  {
    id: "15",
    title: "Adicionar logs e monitoramento",
    description: "Registrar erros e métricas de uso do sistema",
    priority: "medium",
    status: "doing",
    createdAt: new Date("2024-01-24"),
    updatedAt: new Date("2024-01-24"),
  },
  {
    id: "16",
    title: "Configurar permissões de acesso",
    description: "Definir níveis de acesso para diferentes tipos de usuários",
    priority: "high",
    status: "doing",
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-01-26"),
  },
  {
    id: "17",
    title: "Realizar testes de usabilidade",
    description: "Coletar feedback de usuários reais",
    priority: "low",
    status: "done",
    createdAt: new Date("2024-01-27"),
    updatedAt: new Date("2024-01-27"),
  },
  {
    id: "18",
    title: "Otimizar SEO",
    description: "Melhorar indexação e visibilidade nos mecanismos de busca",
    priority: "medium",
    status: "todo",
    createdAt: new Date("2024-01-28"),
    updatedAt: new Date("2024-01-28"),
  },
  {
    id: "19",
    title: "Configurar envio de emails",
    description: "Implementar notificações e recuperação de senha por email",
    priority: "medium",
    status: "todo",
    createdAt: new Date("2024-01-29"),
    updatedAt: new Date("2024-01-29"),
  },
  {
    id: "20",
    title: "Publicar versão final",
    description: "Realizar deploy em ambiente de produção",
    priority: "high",
    status: "done",
    createdAt: new Date("2024-01-30"),
    updatedAt: new Date("2024-01-30"),
  },
];

const initialState: KanbanState = {
  tasks: initialTasks,
  columns: [
    { id: "todo", title: "Pendente", tasks: [] },
    { id: "doing", title: "Em Progresso", tasks: [] },
    { id: "done", title: "Concluído", tasks: [] },
  ],
  filters: {
    priority: "all",
    status: "all",
    search: "",
  },
};

type KanbanAction =
  | { type: "ADD_TASK"; payload: Omit<Task, "id" | "createdAt" | "updatedAt"> }
  | { type: "UPDATE_TASK"; payload: { id: string; updates: Partial<Task> } }
  | { type: "DELETE_TASK"; payload: string }
  | {
      type: "MOVE_TASK";
      payload: { taskId: string; newStatus: TaskStatus; newIndex: number };
    }
  | { type: "SET_FILTERS"; payload: Partial<KanbanState["filters"]> };

function kanbanReducer(state: KanbanState, action: KanbanAction): KanbanState {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask: Task = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }

    case "UPDATE_TASK": {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updates, updatedAt: new Date() }
          : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    case "DELETE_TASK": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    case "MOVE_TASK": {
      const { taskId, newStatus, newIndex } = action.payload;
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus, updatedAt: new Date() }
          : task
      );

      // Reorder tasks within the same status
      const tasksInNewStatus = updatedTasks.filter(
        (task) => task.status === newStatus
      );
      const otherTasks = updatedTasks.filter(
        (task) => task.status !== newStatus
      );

      // Find the moved task and remove it from its current position
      const movedTaskIndex = tasksInNewStatus.findIndex(
        (task) => task.id === taskId
      );
      if (movedTaskIndex !== -1) {
        const [movedTask] = tasksInNewStatus.splice(movedTaskIndex, 1);
        tasksInNewStatus.splice(newIndex, 0, movedTask);
      }

      return {
        ...state,
        tasks: [...otherTasks, ...tasksInNewStatus],
      };
    }

    case "SET_FILTERS": {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    }

    default:
      return state;
  }
}

const KanbanContext = createContext<KanbanContextType | undefined>(undefined);

export function KanbanProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  const addTask = useCallback(
    (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
      dispatch({ type: "ADD_TASK", payload: task });
    },
    []
  );

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    dispatch({ type: "UPDATE_TASK", payload: { id, updates } });
  }, []);

  const deleteTask = useCallback((id: string) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  }, []);

  const moveTask = useCallback(
    (taskId: string, newStatus: TaskStatus, newIndex: number) => {
      dispatch({ type: "MOVE_TASK", payload: { taskId, newStatus, newIndex } });
    },
    []
  );

  const setFilters = useCallback((filters: Partial<KanbanState["filters"]>) => {
    dispatch({ type: "SET_FILTERS", payload: filters });
  }, []);

  const getFilteredTasks = useCallback(() => {
    let filtered = state.tasks;

    // Filter by priority
    if (state.filters.priority !== "all") {
      filtered = filtered.filter(
        (task) => task.priority === state.filters.priority
      );
    }

    // Filter by status
    if (state.filters.status !== "all") {
      filtered = filtered.filter(
        (task) => task.status === state.filters.status
      );
    }

    // Filter by search term
    if (state.filters.search) {
      const searchTerm = state.filters.search.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm) ||
          task.description.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }, [state.tasks, state.filters]);

  // Update columns with filtered tasks
  const getColumnsWithTasks = useCallback(() => {
    const filteredTasks = getFilteredTasks();
    return state.columns.map((column) => ({
      ...column,
      tasks: filteredTasks.filter((task) => task.status === column.id),
    }));
  }, [state.columns, getFilteredTasks]);

  const contextValue: KanbanContextType = {
    ...state,
    columns: getColumnsWithTasks(),
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    setFilters,
    getFilteredTasks,
  };

  return (
    <KanbanContext.Provider value={contextValue}>
      {children}
    </KanbanContext.Provider>
  );
}

export function useKanban() {
  const context = useContext(KanbanContext);
  if (context === undefined) {
    throw new Error("useKanban must be used within a KanbanProvider");
  }
  return context;
}
