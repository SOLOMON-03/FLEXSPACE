import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "./Mylinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
    const [open, setOpen]= useState(false);
    return (
        <>
            {links.map((link) => (
                <div >
                    <div className="cursor-pointer">
                        <p
                            className="flex justify-center items-center gap-2"
                            onClick={()=>setOpen((prev)=> !prev)}
                            // className={({ isActive }) =>
                            //     isActive ? "text-[#fb35c5] font-semibold flex gap-2" : "flex gap-2"
                            // }
                        >
                            {link.name}
                            <span className="text-sm">
                                <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown}></FontAwesomeIcon>
                            </span>
                        </p>
                        {open && link.submenu && (
                            <div className="">
                                <div className="absolute z-[1] top-[4.3rem] bg-[#764c9b] p-3 w-96 max-md:top-[28rem]">
                                    <div className="">
                                        {link.sublinks.map((mysublinks) => (
                                            <div >
                                                {mysublinks.sublink.map((slink) => (
                                                    <li className=" hover:bg-[#fb35c675] p-3 text-left hover:border-l-4">
                                                        <NavLink
                                                            to={slink.link}   
                                                            className="text-sm text-white mb-2"                                                         
                                                        >
                                                            {slink.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;
