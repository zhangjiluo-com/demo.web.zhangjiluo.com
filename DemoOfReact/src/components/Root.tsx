import { Outlet } from "@tanstack/react-router";
import { Button } from "antd";

export default function Root() {
  return (
    <div>
      <Button>Root</Button>
      <Outlet />
    </div>
  );
}
