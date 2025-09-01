"use client";
import React, { useState } from "react";
import Button from "./ui/Button";
import { useThemeStore } from "@/store/themeStore";
import Image from "next/image";
import {
  Bars3CenterLeftIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import SearchBox from "./SearchBox";
function Header({setIsopen}) {
  const currentTheme = useThemeStore((state) => state.Theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div>
      <header className="w-full h-20 bg-primary-50  p-4  flex flex-row justify-between border-b-1 border-primary-300">
        <ul className="flex flex-row gap-3 flex-nowrap ">
          <li>
            <Image
              src={"/image/download2.png"}
              width={48}
              height={60}
              className="rounded-full"
              alt="avatra"
            />
          </li>
          <li className="flex justify-center items-center w-12 h-12 border border-primary-300 rounded-full">
            <Button onClick={handleToggle} className="text-primary-400">
              {currentTheme === "dark" ? (
                <SunIcon width={30} hanging={6} />
              ) : (
                <MoonIcon width={30} hanging={6} />
              )}
            </Button>
          </li>
          <li className="flex justify-center items-center w-12 h-12 border  border-primary-300 rounded-full">
            <Button onClick={handleToggle} className=" text-primary-400">
              {currentTheme === "dark" ? "En" : "فا"}
            </Button>
          </li>
        </ul>
        <div className="flex flex-row-reverse gap-4">
          <div className="flex justify-center items-center w-12 h-12 border border-primary-300 rounded-lg">
            <Button onClick={() => setIsopen((prev) => !prev)}>
              <Bars3CenterLeftIcon className="w-5 h-12" />
            </Button>
          </div>
          <SearchBox
            placeholde="Search or type command..."
            className="w-96 h-12 rounded-lg border border-primary-300 shadow-md"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
