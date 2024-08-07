import DashboardSidebar from "@/components/layouts/DashboardSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function dashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return <DashboardSidebar email={session.user?.email}>{children}</DashboardSidebar>;
}

export default dashboardLayout;
