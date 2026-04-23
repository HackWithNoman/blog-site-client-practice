
import { TooltipProvider } from "@/components/ui/tooltip";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <TooltipProvider>
                {children}
            </TooltipProvider>
        </main>
    )
};

export default DashboardLayout;