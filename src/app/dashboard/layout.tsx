import { DashboardLayout } from "~/app/dashboard/page"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>
}