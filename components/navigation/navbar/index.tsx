import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 sm:px12 fixed w-full gap-5 p-6 dark:shadow-none z-1">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/site-logo.svg" width={23} height={23} alt="DevFlow logo" />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Flow</span>{" "}
        </p>
      </Link>
      <div className="flex-between gap-5">
        <p>Globale search </p>
        <Theme />
              <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
