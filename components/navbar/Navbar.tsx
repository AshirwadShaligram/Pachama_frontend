import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
