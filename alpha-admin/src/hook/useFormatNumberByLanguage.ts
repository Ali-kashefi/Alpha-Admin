"use client";

import { ConvertToPersian } from "@/utils/ConvertToPersian";
import { useEffect, useState } from "react";

function useFormatNumberByLanguage(number: number) {
  //Store the value in local storage
  const [language, setLanguage] = useState<string | null>(null);


  //Changing the language value every time the local storage value changes
  useEffect(() => {
    const lan = localStorage.getItem("language");
    setLanguage(lan)
  }, [
    localStorage.getItem("language")])

  //Checking the value of the language state,
  //  if it is Persian,
  //  it passes it to the ConvertToPersian function to convert the English number to Persian
  // , and if it is English, it returns the same input number.
  if (language === "fa") {
    return ConvertToPersian(number);
  } else {
    return String(number);
  }
}

export default useFormatNumberByLanguage;