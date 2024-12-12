import Navbar from "@/components/Navbar";
import Circle from "@/components/Circle";
import Image from "next/image";
import ButtonContainer from "@/components/ButtonContainer";

const circles = [
  {
    size: 192,
    color: "#243581",
    position: { bottom: "5rem", right: "-14rem" },
    opacity: 0.8,
  },
  {
    size: 192,
    color: "#135f9f",
    position: { bottom: "1rem", left: "-5rem" },
  },
  {
    size: 40,
    color: "white",
    opacity: 0.5,
    position: { bottom: "12rem", left: "5rem" },
  },
  {
    size: 20,
    color: "#1b4c91",
    opacity: 0.5,
    position: { top: "20rem", left: "-3.5rem" },
  },
  {
    size: 20,
    color: "#1b4c91",
    opacity: 0.5,
    position: { top: "15rem", right: "-5rem" },
  },
];

export default function Home() {
  return (
    <main className="bg-gradient from-blue-900 via-blue-700 to-blue-500 overflow-x-hidden">
      <div className="min-h-screen w-screen container mx-auto relative">
        <Navbar />
        <section className="min-h-screen grid grid-cols-1 items-center md:grid-cols-2 gap-10 text-white relative py-10 md:py-20 xl:py-32">
          <div className="flex flex-col md:items-start items-center text-center md:text-left px-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-wide font-bold leading-tight">
              Fast Track Your <br /> IT Evolution
            </h1>
            <p className="text-sm md:text-lg mt-4">Website coming soon !!</p>
            <ButtonContainer />
          </div>
          <div className="hidden md:flex justify-center relative">
            <div className="relative w-60 h-60 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Collaboration"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
          {circles.map((circle, index) => (
            <Circle
              key={index}
              size={circle.size}
              color={circle.color}
              opacity={circle.opacity}
              position={circle.position}
            />
          ))}
        </section>

        <p className="fixed bottom-10 right-10 text-white z-50 text-xl">
          <a
            href="mailto:info@cachelogic.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@cachelogic.tech
          </a>
        </p>
      </div>
    </main>
  );
}
