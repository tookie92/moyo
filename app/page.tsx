import Break from "@/components/sections/Break";
import Characteristics from "@/components/sections/Characteristics";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import HiFiOne from "@/components/sections/HiFiOne";
import HiFiSecond from "@/components/sections/HiFiSecond";
import Lofi from "@/components/sections/Lofi";
import Navbar from "@/components/sections/Navbar";
import Persona from "@/components/sections/Persona";
import Principles from "@/components/sections/Principles";
import Research from "@/components/sections/Research";
import Statistics from "@/components/sections/Statistics";
import StyleGuide from "@/components/sections/StyleGuide";
import UserFlow from "@/components/sections/UserFlow";


export default function Home() {
  return (
     <main className="m-0 p-0 w-full mx-auto">
      <Navbar/>
      <Hero />
        <Characteristics/>
      <Statistics/>
      <Research/>
      <Persona/>
      <UserFlow/>
      <Principles/>
      <StyleGuide/>
      <Lofi/>
      <HiFiOne/>
      <Break/>
      <HiFiSecond/>
      <Contact/> 
     {/* 
       */}
    </main>
  );
}
