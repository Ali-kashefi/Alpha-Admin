"use client"
import { useThemeStore } from "@/store/themeStore";
import "./globals.css";
import Header from "@/componenets/Header";
import Sidebar from "@/componenets/Sidebar";
import {  useState } from "react";
import { AppProvider } from "@/contexts/app-contex";
import { appWithTranslation, useTranslation } from 'next-i18next';

import "../core/next-i18next.config";
import clsx from "clsx";
import Provider from "@/Provider";

function RootLayout({ children }) {
    const { i18n } = useTranslation();

  const theme = useThemeStore((state) => state.Theme);
  const [Isopen, setIsopen] = useState(false);

  


  return (
    <html lang={i18n.language} dir={i18n.dir()} data-theme={theme}>
      <body className="grid grid-rows-10 h-fit grid-cols-9 dark:bg-secondary-100 bg-primary-100">
          <Provider>
        <AppProvider>
          <div className=" col-span-full z-10"><Header setIsopen={setIsopen} /></div>
          <div className={clsx(!Isopen ? 'col-span-8' : 'col-span-7', 'row-span-9')}> {children}</div>
          <div className={clsx('row-span-9', Isopen ? 'col-span-2' : 'col-span-1')} ><Sidebar Isopen={Isopen} setIsopen={setIsopen} /></div>
        </AppProvider>
        </Provider>
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);