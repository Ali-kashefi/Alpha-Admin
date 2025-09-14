"use client";
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
import { useTranslation } from "next-i18next";

function Sidebar({ Isopen, setIsopen }) {
  const { t } = useTranslation();
  //List of icons
  const listicon = [
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
  //List of Keys
  const titlekeys = [
    "dashboard",
    "edit_product",
    "stock_inventory",
    "invoices",
    "comments",
    "invoice_status",
    "customers",
    "customer_status",
    "reports",
    "visits",
    "customer_reports",
    "general_statistics",
  ];
  //Include values ​​for each key
  const Keys = titlekeys.map((i) => {
    return t(`sidebar.${i}`);
  });
  //Merge titles and icons in index order
  function combineArrays(icons, title) {
    const combinedArray = [];
    for (let i = 0; i < listicon.length; i++) {
      combinedArray.push({
        icons: icons[i],
        title: title[i],
      });
    }
    return combinedArray;
  }
  
  //Calling and passing parameters to the hook
  const ref = useOutsideClick(() => setIsopen(false));

  return Isopen ? (
    //open menu And show title with icon
    <aside>
      <div
        ref={ref}
        className={`bg-primary-50  h-full border-l-1 border-primary-300 border-t-0 border-r-1 p-4
               transition-all duration-3000 ease-in-out `}
      >
        <ul className="flex flex-col items-end space-y-5 space-x-5 dark:bg-secondary-100 ">
          <List_li
            number={test}
            className="flex items-center text-primary-400  dark:text-sec justify-end gap-2 w-full  rounded-lg mt-2 transition-colors hover:bg-gray-300 focus:bg-gray-300"
          />
        </ul>
      </div>
    </aside>
  ) : (
    //Closed mode and icon display
    <aside className="bg-primary-50 h-full w-20 border-l-1 dark:bg-secondary-100 border-primary-300 border-r-1 justify-self-end">
      <ul className="flex flex-col items-center">
        <List_li
          number={listicon}
          className="flex items-center justify-center text-primary-400  text-center rounded-lg focus:text-primary-50 hover:text-light-100 h-12 w-12 mt-2 focus:bg-light-100"
        />
      </ul>
    </aside>
  );
}

export default Sidebar;
