import { StrictMode } from "react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./routes";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

export default function App() {
  return (
    <StrictMode>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </StrictMode>
  );
}
