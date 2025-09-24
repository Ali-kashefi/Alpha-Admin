"use client"

import AnnualReportChart from "@/componenets/charts/AnnualReportChart";
import DashboardChart from "@/componenets/charts/Dashboard";
import MonthlySalesChart from "@/componenets/charts/MonthlySalesChart";
import Loading from "@/componenets/ui/Loading";
import useFormatNumberByLanguage from "@/hook/useFormatNumberByLanguage";
import useGetData from "@/hook/useGetdata";
import { getInvoices, getUsers } from "@/services/Services";
import GenerateMetadata from "@/utils/GenerateMetadata";
import { useTranslation } from "next-i18next";
import { FaDollarSign } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
export default function Home() {
  //Call for bilingualism
  const { t } = useTranslation();
  //Pass the values ​​of the title of this page
  GenerateMetadata(t("Metadata.panel"))
  //Get Users
  const { data, error, isLoading } = useGetData({ queryKey: "uses", queryAPI: getUsers })
  //Get Invoices
  const { data: datainvoices, isLoading: lo } = useGetData({ queryKey: "invoices", queryAPI: getInvoices })
  if (isLoading || lo) {
    return <Loading />
  }
  //Calculate the number of users
  const usersCount = data?.length || 0;
  //Filter invoices based on successful invoices and calculate the total amount.
  const total_sales = datainvoices?.filter((invoices) => invoices.status === "موفق").reduce((accumulator, invoice) => {
    return accumulator + invoice.totalAmount;
  }, 0);






  return (
    <div>
      <main className="dark:bg-secondary-100 text-left p-4 gap-6">
        {/*Dashboard*/}
        <section className=" dark:bg-secondary-100 text-left   grid grid-cols-4 grid-rows-9 gap-6">

          {/* Weekly sales display chart */}
          <div className="col-span-2 row-span-9 bg-primary-50 rounded-3xl p-3 flex flex-col items-center relative dark:bg-secondary-700">
            <div className="absolute top-4 start-4  text-start">
              <h1 className="dark:text-primary-100 ">{t("home.weeklySales.0.tittle_weekly")}</h1>
              <p className="text-primary-400 mt-">{t("home.weeklySales.0.info_weekly")}</p>
            </div>
            <DashboardChart invoices={datainvoices} translate={t} />
          </div>

          <div className="col-span-1 flex flex-col  gap-4  items-end row-span-4 bg-primary-50 dark:bg-secondary-600 rounded-3xl p-4">
            <div className="p-2 rounded-lg bg-primary-100">
              <FaDollarSign className="w-7 h-7 text-primary-600" />
            </div>
            <p className="text-primary-400"> {t("home.total_sales")}</p>
            <h2 className=" text-3xl dark:text-white ">{useFormatNumberByLanguage(total_sales.toLocaleString('en-US'))}</h2>
          </div>
          <div className="col-span-1 flex flex-col gap-4 items-end row-span-4 bg-primary-50 rounded-3xl p-4 dark:bg-secondary-600">
            <div className="p-2 rounded-lg bg-primary-100">
              <FiUsers className="w-7 h-7 text-primary-600" />
            </div>
            <p className="text-primary-400"> {t("home.customer")}</p>
            <h2 className=" text-3xl dark:text-white ">{useFormatNumberByLanguage(usersCount)}</h2>
          </div>
          <div className="col-span-2 row-span-5 bg-primary-50 rounded-3xl  dark:bg-secondary-600">
            <MonthlySalesChart translate={t} />
          </div>


        </section>
        <div className=" bg-primary-50 rounded-3xl  dark:bg-secondary-600 mt-6">
          <AnnualReportChart />
        </div>


      </main>
    </div>
  );
}
