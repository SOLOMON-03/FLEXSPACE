// import {
//     faChevronDown,
//     faChevronUp,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";

// export const Dropdown = () => {
//     const list = [
//         {
//             place: "Coimbatore",
//         },
//         {
//             place: "Chennai",
//         },
//     ];
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <>
//             <div className="w-full">
//                 <div
//                     className="relative flex gap-2 justify-center items-center"
//                     onClick={() => setIsOpen((prev) => !prev)}
//                 >
//                     <button className="">
//                         Location
//                         {!isOpen ? (
//                             <FontAwesomeIcon icon={faChevronDown} className="h-4" />
//                         ) : (
//                             <FontAwesomeIcon icon={faChevronUp} className="h-4" />
//                         )}
//                     </button>
//                 </div>
//             </div>
//             {isOpen && (
//                 <div className="bg-[#764c9b] p-4 text-white">
//                     {list.map((item, i) => {
//                         return (<div>
//                             <h3>{item.place}</h3>
//                         </div>);
//                     })}
//                     iugef
//                 </div>
//             )}
//         </>
//     );
// };
