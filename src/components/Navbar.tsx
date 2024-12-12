import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Navbar() {
  return (
    <header className="w-full z-50 border-b-2 border-white">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={300} height={100} priority />
        </div>
      </div>
    </header>
  );
}
