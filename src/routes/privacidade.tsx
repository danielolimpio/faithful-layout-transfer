import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  component: () => <Outlet />,
});
