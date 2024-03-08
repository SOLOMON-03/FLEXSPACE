import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import  {SignIn}  from "../Pages/SignIn";
import {
    faBarsStaggered,
    faChevronDown,
    faChevronUp,
    faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "./Mylinks";

export const Header = () => {
    const [Icon, setIcon] = useState(false);
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="bg-[#5E0094] p-3 shadow-xl">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="md:w-auto w-full flex justify-between">
                        <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
                        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={`${open ? faClose : faBarsStaggered}`} />
                        </div>
                    </div>
                    <ul
                        className={`flex md:flex-row text-lg gap-5 whitespace-nowrap text-center max-md:absolute 
                    max-md:top-[4rem] max-md:bg-[#5E0094] max-md:z-auto z-[1] right-0 
                    max-md:w-72 max-md:h-screen transition-all duration-500 ease-in-out max-md:justify-center items-center 
                        ${Icon
                                ? " flex-col relative"
                                : "max-md:flex-col right-[-490px]"
                            }`}
                    >
                        <li className="text-white">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-[#fb35c5] font-semibold" : ""
                                }
                                onClick={() => setIcon(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-white">
                            <NavLink
                                to="/pricing"
                                className={({ isActive }) =>
                                    isActive ? "text-[#fb35c5] font-semibold" : ""
                                }
                                onClick={() => setIcon(false)}
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li className="text-white">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "text-[#fb35c5] font-semibold" : ""
                                }
                                onClick={() => setIcon(false)}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="text-white">
                            <p
                                className="flex justify-center items-center gap-2 cursor-pointer"
                                onClick={() => setOpen((prev) => !prev)}
                            >
                                Location
                                <span className="text-sm">
                                    <FontAwesomeIcon
                                        icon={open ? faChevronUp : faChevronDown}
                                    ></FontAwesomeIcon>
                                </span>
                            </p>
                            {open && (
                                <div className="flex justify-center items-center md:absolute md:bg-[#5E0094] md:w-60 md:top-[4.8rem]">
                                    {links.map((link) => (
                                        <div className="cursor-pointer">
                                            {open && link.submenu && (
                                                <div className="">
                                                    {link.sublinks.map((mysublinks) => (
                                                        <div>
                                                            {mysublinks.sublink.map((slink) => (
                                                                <li className=" hover:bg-[#fb35c675] p-3 hover:border-l-4 text-center w-60 hover:font-medium hover:tracking-wider">
                                                                    <NavLink
                                                                        to={slink.link}
                                                                        className="text-sm text-white mb-2 "
                                                                        onClick={()=>setOpen(!open)}
                                                                    >
                                                                        {slink.name}
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li>
                            <div>
                                <SignIn />
                            </div>
                        </li>
                    </ul>
                    <div className="text-white md:hidden">
                        <FontAwesomeIcon
                            icon={Icon ? faClose : faBarsStaggered}
                            size="xl"
                            onClick={() => setIcon(!Icon)}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};
