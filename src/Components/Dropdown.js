import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Dropdown = () => {
    const list = [
        {
            place: "Coimbatore",
        },
        {
            place: "Chennai",
        },
    ];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full">
            <div
                className="relative flex gap-2 justify-center items-center"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <button className="">Location</button>
                {!isOpen ? (
                    <FontAwesomeIcon icon={faSortDown} className="h-4" />
                ) : (
                    <FontAwesomeIcon icon={faSortUp} className="h-4" />
                )}
            </div>
        </div>
    );
};
