import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactElement } from "react";
import Layout from "@/components/layouts";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between ${inter.className}`}
    >
   <Banner/>
    </main>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>
    {page}
  </Layout>
}
