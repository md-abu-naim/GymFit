import Navber from "../Components/Navber";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-[family-name:var(--font-geist-sans)]">
      <main className="font-serif">
        <header className="bg-[url('/Banner.jpg')] bg-no-repeat bg-cover">
          <Navber></Navber>
        </header>
      </main>
    </div>
  );
}
