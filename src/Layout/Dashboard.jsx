import React from "react";
import { Avatar, IconButton } from "@material-tailwind/react";
import { FaBars, FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { GoGear, GoProjectRoadmap } from "react-icons/go";
import { Drawer, Button, Typography } from "@material-tailwind/react";
import { MdManageAccounts, MdMessage } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { IoLogOut, IoPeopleSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUsers";

function NavList() {
  const navItems = [
    ["users", <MdManageAccounts />],
    ["projects", <GoProjectRoadmap />],
    ["add", <IoIosAddCircle />],
    ["skills", <GiSkills />],
    ["messages", <MdMessage />],
    ["about", <IoPeopleSharp />],
    ["settings", <GoGear />],
  ];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-bold text-white">
        <Link
          to={"/"}
          className="flex items-center text-tertiary hover:text-blue-500 transition-colors uppercase"
        >
          <FaHome className="text-2xl mr-2" />
          Home
        </Link>
      </Typography>
      {navItems.map((navItem, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          className="p-1 font-bold text-tertiary"
        >
          <Link
            to={`${navItem[0]}`}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            <span className="text-2xl text-s mr-2">{navItem[1]}</span>
            <span className="uppercase">{navItem[0]}</span>
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

const Dashboard = () => {
  const [open, setOpen] = React.useState(true);
  const [users] = useUsers();
  const { user, logOut } = useAuth();
  const currentUser = users?.find((loggedUser) => loggedUser.email === user.email);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <React.Fragment>
        <Button className="rounded-none px-3 py-2 m-5" onClick={openDrawer}>
          <FaBars className="text-2xl"></FaBars>
        </Button>
        <Drawer
          open={open}
          onClose={closeDrawer}
          className="p-4 bg-secondary/40"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" className="text-black " color="blue-gray">
              Thunder Triangle
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <ImCross className="text-xl text-white " />
            </IconButton>
          </div>
          <div className="flex items-center gap-2">
            <Avatar src={currentUser?.imageURL} alt="avatar" />
            <Typography className="text-white">{currentUser?.name || ""}</Typography>
          </div>
          <div>
            <NavList/>
            <Button
              onClick={handleLogOut}
              className="bg-transparent shadow-none flex p-1 items-center text-tertiary font-bold"
            >
              <IoLogOut className="text-3xl mr-1" />
              LogOut
            </Button>
          </div>
        </Drawer>
      </React.Fragment>
      <div className="mx-auto lg:container p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
