"use client";
import React from "react";
import Button from "./ui/Button";
import { useAppContext } from "@/contexts/app-contex";

function LanguageSwitcher() {
  const { language, changeLanguage } = useAppContext();

  const handleLanguageChange = () => {
    const newLanguage = language === "fa" ? "en" : "fa";
    changeLanguage(newLanguage);
  };

  return (
    <Button onClick={handleLanguageChange} className="text-primary-400">
      {language === "fa" ? "En" : "فا"}
    </Button>
  );
}

export default LanguageSwitcher;