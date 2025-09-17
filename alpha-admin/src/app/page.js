"use client"
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
  const total_sales = datainvoices?.filter((invoices) => invoices.status === "موفق").reduce((accumulator, invoice) => {
    return accumulator + invoice.totalAmount;
  }, 0);






  return (
    <div>
      <main>
        {/*Dashboard*/}
        <section className=" dark:bg-secondary-100 text-left h-screen p-4 grid grid-cols-4 grid-rows-7 gap-6">
          <div className="col-span-2 row-span-4 bg-primary-50 rounded-3xl p-4 dark:bg-secondary-200">
            monyhly
          </div>

          <div className="col-span-1 flex flex-col  gap-4  items-end row-span-2 bg-primary-50 dark:bg-secondary-200 rounded-3xl p-4">
            <div className="p-2 rounded-lg bg-primary-100">
              <FaDollarSign className="w-7 h-7 text-primary-600" />
            </div>
            <p className="text-primary-400"> {t("home.total_sales")}</p>
            <h2 className=" text-3xl">{useFormatNumberByLanguage(total_sales.toLocaleString('en-US'))}</h2>
          </div>
          <div className="col-span-1 flex flex-col gap-4 items-end row-span-2 bg-primary-50 rounded-3xl p-4 dark:bg-secondary-200">
            <div className="p-2 rounded-lg bg-primary-100">
              <FiUsers className="w-7 h-7 text-primary-600" />
            </div>
            <p className="text-primary-400"> {t("home.customer")}</p>
            <h2 className=" text-3xl">{useFormatNumberByLanguage(usersCount)}</h2>
          </div>
          <div className="col-span-2 row-span-2 bg-primary-50 rounded-3xl p-4 dark:bg-secondary-200">
            monyhly report
          </div>
          <div className="col-span-4 row-span-3 bg-primary-50 rounded-3xl p-4 dark:bg-secondary-200">
            yearsly report
          </div>

        </section>



      </main>
    </div>
  );
}
