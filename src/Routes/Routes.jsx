import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import AllProject from "../pages/Dashboard/AllProject/AllProject";
import AddProject from "../pages/Dashboard/AddProject/AddProject";
import Skills from "../pages/Dashboard/Skills/Skills";
import Messages from "../pages/Dashboard/Messages/Messages";
import AboutMe from "../pages/Dashboard/About/AboutMe";
import Settings from "../pages/Dashboard/Settings/Settings";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import EditProject from "../pages/EditProject/EditProject";
import Users from "../pages/Dashboard/Users/Users";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "super-shohag",
    // element: <Dashboard></Dashboard>,
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "projects",
        element: <AllProject></AllProject>,
      },
      {
        path: "add",
        element: <AddProject></AddProject>,
      },
      {
        path: "edit/:id",
        element: <EditProject></EditProject>
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "messages",
        element: <Messages></Messages>,
      },
      {
        path: "about-me",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "settings",
        element: <Settings></Settings>,
      },
    ],
  },
]);
