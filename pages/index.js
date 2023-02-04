
import PageHead from "@/components/head/page-head";
import { Inter } from "@next/font/google";
import NavBar from "../components/navbar/nav";
import Bio from "@/components/bio/bio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
  <PageHead/>
      <main className="bg-white pg-10">
        <section className="bg-blue-700 min-h-screen ">
       <NavBar/>
       <Bio/>
        </section>
      </main>
    </>
  );
}
