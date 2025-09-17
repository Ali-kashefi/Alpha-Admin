"use client";
import { useAppContext } from "@/contexts/app-contex";
import { ConvertToPersian } from "@/utils/ConvertToPersian";

function useFormatNumberByLanguage(number) {
  const { language } = useAppContext();

  if (language === "fa") {
    return ConvertToPersian(number);
  } else {
    return String(number);
  }
}

export default useFormatNumberByLanguage;