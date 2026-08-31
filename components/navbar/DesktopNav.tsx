import NavigationLinks from "./centersection/NavigationLinks";
import Logo from "./leftsection/Logo";
import RightSection from "./rightsection/RightSection";

const DesktopNav = () => {
  return (
    <div className="hidden w-full items-center md:flex">
      {/* left */}
      <Logo />

      {/* Center */}
      <div className="mx-auto">
        <NavigationLinks />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <RightSection />
      </div>
    </div>
  );
};

export default DesktopNav;
