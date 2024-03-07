import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
// import { Dropdown } from "./Dropdown";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { faBarsStaggered, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
    const [Icon, setIcon] = useState(false);
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* <div className="bg-[#764c9b] p-3 ">
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
        </div> */}

            <nav className="bg-[#764c9b] p-3">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="md:w-auto w-full flex justify-between">
                        <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
                        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={`${open ? faClose : faBarsStaggered}`}/>
                        </div>
                    </div>
                    <ul className={`flex md:flex-row text-lg gap-3 whitespace-nowrap text-center max-md:absolute 
                    max-md:top-[3.25rem] max-md:bg-[#764c9b] max-md:z-auto z-[1] right-0 
                    max-md:w-72 max-md:justify-center max-md:h-screen transition-all duration-500 ease-in-out items-center
                        ${Icon
                            ? " flex-col relative"
                            : "max-md:flex-col right-[-490px]"
                        }`}>
                        <li className="text-white">
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "text-[#fb35c5] font-semibold" : ""
                            }
                            onClick={() => setIcon(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li className="text-white">
                            <NavLink to="/pricing" className={({ isActive }) =>
                                isActive ? "text-[#fb35c5] font-semibold" : ""
                            }
                            onClick={() => setIcon(false)}>
                                Pricing
                            </NavLink>
                        </li>
                        <li className="text-white">
                            <NavLinks className={({ isActive }) =>
                                isActive ? "text-[#fb35c5] font-semibold" : ""
                            }
                            onClick={() => setIcon(false)}/>
                        </li>
                        <div className="flex max-md:absolute bottom-2 left-20">
                            <Button />
                        </div>
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
