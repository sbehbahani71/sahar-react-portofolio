
import PageHead from "@/components/head/page-head";
import { Inter } from "@next/font/google";
import NavBar from "../components/navbar/nav";
import Bio from "@/components/bio/bio";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
    <div className="dark">
  <PageHead/>
      <main className="bg-white pg-10 md:px-20 lg:px-40">
        <section className=" min-h-screen ">
       <NavBar />
       <Bio/>
        </section>
      </main>
    </div>
  );
}
