import Sidebar from "@/components/admin/layout/Sidebar";
import type { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex flex-1">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
