"use client"
import { useThemeStore } from "@/store/themeStore";
import "./globals.css";
import Header from "@/componenets/Header";
import Sidebar from "@/componenets/Sidebar";
import { useState } from "react";
import { AppProvider } from "@/contexts/app-contex";
import { appWithTranslation } from 'next-i18next';

import "../core/next-i18next.config";

function RootLayout({ children }) {
  const theme = useThemeStore((state) => state.Theme);
  const [Isopen, setIsopen] = useState(false);

  return (
      <html lang="fa" dir="rtl" data-theme={theme}>
        <body className="grid grid-rows-10 h-fit grid-cols-9">
          <AppProvider>
            <div className=" col-span-full z-10"><Header setIsopen={setIsopen} /></div>
            <div className="col-span-7 row-span-9"> {children}</div>
            <div className="row-span-9 col-span-2 "><Sidebar Isopen={Isopen} setIsopen={setIsopen} /></div>
          </AppProvider>
        </body>
      </html>
  );
}

export default appWithTranslation(RootLayout);