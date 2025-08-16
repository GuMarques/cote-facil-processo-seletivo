import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/todo", "routes/todo.tsx"),
  route("/gallery", "routes/gallery.tsx"),
] satisfies RouteConfig;
