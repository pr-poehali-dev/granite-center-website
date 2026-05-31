import { useState, useEffect } from "react";
import Navbar from "@/components/granite/Navbar";
import HeroSections from "@/components/granite/HeroSections";
import ServicesSections from "@/components/granite/ServicesSections";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0F0D0A] text-[#EDE6DF] font-golos overflow-x-hidden">
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroSections scrollTo={scrollTo} />
      <ServicesSections scrollTo={scrollTo} />
    </div>
  );
}
