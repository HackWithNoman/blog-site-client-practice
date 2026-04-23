import Footer from "@/components/footer";
import Navbar from "@/components/navBar/navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (

        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default CommonLayout;