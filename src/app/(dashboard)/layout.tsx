import { DashboardSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const userRole = "admin"

const DashboardLayout = ({ admin, user }: {
    admin: React.ReactNode,
    user: React.ReactNode
}) => {
    return (

        <>
            <SidebarProvider>
                <div className="relative flex h-dvh w-full">
                    <DashboardSidebar />
                    <SidebarInset className="flex flex-col" >

                        {userRole === "admin" ? admin : user}
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </>

    )
};

export default DashboardLayout;