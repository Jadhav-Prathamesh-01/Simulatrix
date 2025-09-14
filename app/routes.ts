import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("api/auth/login", "routes/api.auth.login.ts"),
  route("api/auth/register", "routes/api.auth.register.ts"),
] satisfies RouteConfig;
