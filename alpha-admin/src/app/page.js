"use client"

import useGenerateMetadata from "@/hook/useGenerateMetadata";
import { useTranslation } from "next-i18next";

export default function Home() {
  //Call for bilingualism
  const { t } = useTranslation();
  //Pass the values ​​of the title of this page
  useGenerateMetadata(t("Metadata.panel"))
  return (
    <div className="h-full w-full">

    </div>
  );
}
