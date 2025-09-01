import React, { useEffect } from "react";
import List_li from "./ui/List_li";
import { AiFillProduct } from "react-icons/ai";
import { LiaEdit, LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineInventory } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { GrStatusGood, GrView } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { RiInformationLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import useOutsideClick from "@/hook/useOutsideClick";

function Sidebar({ Isopen, setIsopen }) {
  const listvalue = [
    <AiFillProduct className="w-16 h-7 " />,
    <LiaEdit className="w-16 h-7  " />,
    <MdOutlineInventory className="w-16 h-7 " />,
    <LiaFileInvoiceSolid className="w-16 h-7 " />,
    <FaRegComments className="w-16 h-7 " />,
    <GrStatusGood className="w-16 h-7 " />,
    <FiUsers className="w-16 h-7 " />,
    <RiInformationLine className="w-16 h-7 " />,
    <TbReportSearch className="w-16 h-7 " />,
    <GrView className="w-16 h-7 " />,
    <FaPeopleGroup className="w-16 h-7 " />,
    <IoStatsChartSharp className="w-16 h-7 " />,
  ];
    const ref = useOutsideClick(() => setIsopen(false));

  return Isopen ? (
    <>
      <div ref={ref} className="bg-primary-50 h-full w border-l-1 border-primary-300 border-r-1  "></div>
    </>
  ) : (
    <aside className="bg-primary-50 h-full w-20 border-l-1 border-primary-300 border-r-1 justify-self-end">
      <ul className="flex flex-col items-center">
        <List_li
          number={listvalue}
          className="flex items-center justify-center text-primary-300 text-center rounded-lg focus:text-primary-50 hover:text-light-100 h-12 w-12 mt-2 focus:bg-light-100"
        />
      </ul>
    </aside>
  );
}

export default Sidebar;
