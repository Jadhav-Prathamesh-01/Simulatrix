import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("contact", "routes/contact.tsx"),
  route("api/auth/login", "routes/api.auth.login.ts"),
  route("api/auth/register", "routes/api.auth.register.ts"),
  route("404", "routes/404.tsx"),
] satisfies RouteConfig;
