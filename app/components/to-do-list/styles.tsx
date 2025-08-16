import { Link } from "react-router";
import { styled, css } from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  padding: 1.5rem;
  background: #ffefba;
  background: -webkit-linear-gradient(to top, #ffffff, #ffefba);
  background: linear-gradient(to top, #ffffff, #ffefba);
`;

export const Container = styled.div`
  max-width: 768px;
  margin: 0px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 8px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #28a746e2;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;

export const ItemText = styled.span<{ completed: boolean }>`
  flex: 1;
  color: ${({ completed }) => (completed ? "#aaa" : "#222")};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

export const ListButton = styled.button<{
  bgColor?: string;
  hoverBgColor?: string;
}>`
  border: none;
  padding: 6px;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 4px;
  background: transparent;
  transition: all 0.2s ease-in-out;
  background-color: ${({ bgColor }) => bgColor};
  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
  }
`;

export const PriorityBadge = styled.span<{ priority: TodoPriority }>`
  padding: 2px 8px;
  border-radius: 16px;
  font-size: 0.85em;
  height: 26px;
  color: white;
  ${({ priority }) =>
    priority === "low" &&
    css`
      background: #4da6ff;
    `}
  ${({ priority }) =>
    priority === "medium" &&
    css`
      background: #ff9800;
    `}
  ${({ priority }) =>
    priority === "high" &&
    css`
      background: #f44336;
    `}
`;

export const PrioritySelect = styled.select`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1em;
  background: #f7f7f7;
  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const EmptyAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  background: #f6f6f6;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  flex-direction: column;
`;

export const EmptyAlertText = styled.span`
  font-size: 1rem;
  color: #888;
`;

export const ListTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CompletedSection = styled.div`
  margin-top: 2rem;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  background-color: white;
  border: 1px solid #ccc;
  background-color: white;
  width: 16px;
  height: 16px;
  cursor: pointer;
  border-radius: 4px;
  position: relative;

  &:checked {
    background-color: #4f46e5;
    border-color: #4f46e5;
  }
  &:checked::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 1px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 2px;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
  color: #2563eb;
  text-decoration: none;
  &:hover {
    color: #1d4ed8;
  }
  font-size: 0.875rem;
`;
