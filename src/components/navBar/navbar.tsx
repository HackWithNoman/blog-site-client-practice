import { Button } from "@/components/ui/button";
import { Logo } from "../shared/logo";
import { NavMenu } from "./nav-menu";
import { ModeToggle } from "../layout/MoodeToggle";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button className="hidden sm:inline-flex" variant="outline">
            <Link href={'/login'}>
              Login
            </Link>
          </Button>
          <Button>
            <Link href={'/register'}>
              Register
            </Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
