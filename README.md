# Processo Seletivo - Cote Fácil

Este projeto contém três aplicações: Lista de Tarefas, Galeria de Imagens e Quadro de Tarefas

## Requisitos

- **Node.js** versão **22.x** ou superior
- **pnpm** versão **9.x** ou superior

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/cote-facil-processo-seletivo.git
   cd cote-facil-processo-seletivo
   ```

2. **Instale as dependências:**

   ```bash
   pnpm install
   ```

3. **Configure o arquivo `.env`:**
   - Copie o arquivo de exemplo:

     ```bash
     cp .env.example .env
     ```

   - Preencha a variável `VITE_UNSPLASH_ACCESS_KEY` com sua chave de acesso da API do Unsplash.

     ```
     VITE_UNSPLASH_ACCESS_KEY=SEU_ACCESS_KEY_AQUI
     ```

## Rodando o projeto em modo desenvolvimento

```bash
pnpm dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173) (ou porta informada no terminal).

## Tecnologias Utilizadas

### Geral do Sistema

- **React 19**: Biblioteca principal para construção das interfaces.
- **React Router**: Gerenciamento de rotas e navegação entre páginas.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Tailwind CSS**: Estilização utilitária e responsiva.
- **Mantine**: Biblioteca de componentes UI moderna e flexível.
- **pnpm**: Gerenciador de pacotes rápido e eficiente.
- **Vite**: Ferramenta de build e desenvolvimento rápido.

### Lista de Tarefas

- **React + Styled Components**: Utilizado para demonstrar estilização CSS-in-JS e componentização.
- **Gerenciamento de estado local**: Simples, usando hooks do React.
- **Abordagem minimalista**: Foco em clareza e usabilidade.

### Galeria de Imagens

- **React + ShadCn + Tailwind CSS**: Interface responsiva e moderna com componentes acessíveis e customizáveis (Popover, Tooltip, etc).
- **TanStack Query**: Gerenciamento eficiente de dados assíncronos e cache de requisições à API.
- **Unsplash API**: Consumo de dados reais de imagens.
- **Busca, filtros e downloads**: Funcionalidades avançadas para pesquisa e manipulação de imagens.
- **Abordagem modular**: Componentes reutilizáveis e separação clara de responsabilidades.

### Quadro de Tarefas

- **React + Mantine**: Utilização avançada de componentes Mantine para UI rica.
- **@hello-pangea/dnd**: Drag and drop para movimentação de tarefas entre colunas.
- **Context API + useReducer**: Gerenciamento de estado global e ações complexas.
- **Notificações e Modais**: Feedback visual ao usuário usando Mantine Notifications e Modals.
- **Charts**: Visualização de estatísticas com gráficos interativos.

---

Cada aplicação foi construída utilizando diferentes tecnologias e abordagens para resolver problemas semelhantes, com o objetivo de demonstrar minha versatilidade e conhecimento técnico em múltiplos stacks e padrões de desenvolvimento.
