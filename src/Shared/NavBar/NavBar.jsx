import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NavList() {
  const navItems = ["portfolio", "blog", "contact"];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
          as="li"
          variant="small"
          className="p-1 font-bold text-primary"
        >
          <Link
            to={'/'}
            className="flex items-center hover:text-blue-500 transition-colors uppercase"
          >
            Home
          </Link>
        </Typography>
      {navItems.map((navItem, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          className="p-1 font-bold text-[#F85023]"
        >
          <Link
            to={`/${navItem}`}
            className="flex items-center hover:text-blue-500 transition-colors uppercase"
          >
            {navItem}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto px-6 py-3 bg-transparent border-none shadow-none">
      <div className="flex items-center justify-between text-white bg-transparent ">
        <Typography
          as="a"
          href="/"
          className="mr-4 text-xl font-bold text-tertiary cursor-pointer py-1.5 "
        >
          Thunder Triangle
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FaXmark className="text-2xl text-primary " />
          ) : (
            <FaBars className="text-2xl text-primary" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
