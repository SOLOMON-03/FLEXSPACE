import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Dropdown } from "./Dropdown";

export const Header = () => {
    const [Icon, setIcon] = useState(false);
    return (<>
        <div className="bg-[#764c9b] p-3 ">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div>
                <img src={logo} alt="" className="w-64 max-md:w-52" />
            </div>
            <div className="text-white">
                <ul
                    className={`flex md:flex-row text-lg gap-3 whitespace-nowrap text-center max-md:absolute max-md:top-[3.25rem] max-md:bg-[#764c9b]    max-md:z-auto z-[1] right-0 max-md:w-72 max-md:justify-center max-md:h-screen transition-all duration-500 ease-in-out 
                        ${Icon
                            ? " flex-col z[-1] relative"
                            : "max-md:flex-col max-md:justify-center right-[-490px]"
                        }`}
                >
                    <li className="hover:text-[#fb35c5] cursor-pointer">
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
                    <li className="hover:text-[#fb35c5] cursor-pointer ">
                        <NavLink
                            to="/location"
                            className={({ isActive }) =>
                                isActive ? "text-[#fb35c5] font-semibold" : ""
                            }
                            onClick={() => setIcon(false)}
                        >
                            <Dropdown />
                        </NavLink>
                    </li>
                    <li className="hover:text-[#fb35c5] cursor-pointer ">
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
                    <li className="hover:text-[#fb35c5] cursor-pointer ">
                        <NavLink
                            to="/sign-in"
                            className={({ isActive }) =>
                            isActive ? "text-[#fb35c5] font-semibold" : ""
                        }
                            onClick={() => setIcon(false)}
                        >
                            SignIn
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-white md:hidden">
                <FontAwesomeIcon
                    icon={Icon ? faTimes : faBars}
                    size="xl"
                    onClick={() => setIcon(!Icon)}
                />
            </div>
            </div>
        </div>
        </>
    );
};
