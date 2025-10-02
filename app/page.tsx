import Characteristics from "@/components/sections/Characteristics";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col relative">

      <Hero />
       <Characteristics/>
      <Statistics/>
      
    </div>
  );
}
