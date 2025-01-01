import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ProfileLogo from "../assets/PersonalDoctor.png";

import {
  Menu,
  CircleUser,
  Settings,
  Inbox,
  CircleHelp,
  LogOut,
} from "lucide-react";
import {
  Card,
  Navbar,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { baza } from "../components/Sidebar/sidebarRoures";
import axios from "axios";

const Sidebar = () => {
  const [name, setName] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((res) => {
  //       setName(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // });

  const [openNav, setOpenNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  let roleStorage = localStorage.getItem("role") || "";

  const userData = {
    role: roleStorage,
  };

  const filteredRoutes =
    baza?.filter((el) => el.role.includes(userData.role)) || [];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = (index, isLastItem) => {
    if (isLastItem) {
      const logEvent = window.confirm("Rostanham chiqmoqchimisiz?");
      if (logEvent) {
        localStorage.clear();
        navigate("/register");
      }
    } else {
      setIsExpanded((prev) => !prev);
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Navbar className="fixed h-max top-0 z-[20] shadow-none border-gray-100 border-b-[2px] max-w-full rounded-none px-4 py-4 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Link to="/">
              <Typography className="font-semibold text-2xl text-[--rang]">
                Medical Center
              </Typography>
            </Link>
            <div className="profile gap-2 flex items-center justify-center">
              <img src={ProfileLogo} alt="" className="w-[3rem] h-[3rem]" />
              <Typography className="w-[8rem] font-arial font-medium leading-0 phonemcl:inline-block hidden">
                {name.name || "Muhammadiso Sobitxonov"}
              </Typography>
            </div>
          </div>
        </Navbar>
        <div className="flex tablet:z-[19] z-[50]">
          <Card
            className={`md:h-[90vh] md:border-t-0 justify-center items-start tablet:bottom-0 bottom-0 md:flex-col md:rounded-none border-t-2 md:border-b-2 flex md:hover:max-w-[20rem] flex-row max-w-[100vw] overflow-hidden fixed md:left-0 ease-linear duration-300 w-full md:max-w-[4rem] md:p-2 ${
              isExpanded ? "h-[100vh]" : "h-[10vh]"
            }`}
          >
            <List className="h-[90vh] tablet:gap-y-2 flex-wrap gap-y-2 flex md:flex-col overflow-y-auto flex-row w-full">
              <ListItem
                onClick={() => setIsExpanded((prev) => !prev)}
                className="hover:bg-[--rang] tablet:hidden pl-3 w-full md:bg-white bg-gray-200 capitalize m-0 flex md:justify-start justify-start items-center md:p-3 font-medium hover:text-white focus:bg-[--rang] focus:text-white"
              >
                <ListItemPrefix className="md:mr-4 mr-2">
                  <Menu />
                </ListItemPrefix>
                <div className="block">Ochish</div>
              </ListItem>

              {filteredRoutes.map((el, index) => {
                const isLastItem = index === filteredRoutes.length - 1;
                return (
                  <Link to={el.navigate} key={index} className="w-full">
                    <ListItem
                      onClick={() => handleItemClick(index, isLastItem)}
                      className={`shadow-lg hover:bg-[--rang] w-full md:bg-white bg-gray-200 capitalize m-0 flex md:justify-start justify-start items-center md:p-3 font-medium hover:text-white focus:bg-[--rang] focus:text-white ${
                        isLastItem ? "hover:bg-red-700 focus:bg-red-700" : ""
                      }`}
                    >
                      <ListItemPrefix className="md:mr-4 mr-2">
                        {el.icon}
                      </ListItemPrefix>
                      <div className="inline-block">{el.title}</div>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Card>
        </div>
        <div className="tablet:pl-20 pl-2 flex-1 bg-[url('./assets/backround.png')] bg-cover bg-center tablet:pb-0 pb-[5rem] pt-[5rem]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
