import Banner from "@/Components/Banner";
import Navber from "../Components/Navber";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#252322] text-white font-[family-name:var(--font-geist-sans)]">
      <header className="bg-[url('/bg.jpg')] pt-10 font-serif bg-no-repeat bg-cover lg:px-16">
          <Navber></Navber>
          <Banner />
        </header>
      <main className="font-serif ">
        
      </main>
    </div>
  );
}
