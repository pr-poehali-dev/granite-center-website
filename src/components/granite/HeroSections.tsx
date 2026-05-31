import { useRef, useState, useEffect } from "react";
import { HERO_IMG, TEXTURE_IMG, STATS } from "./data";

interface HeroSectionsProps {
  scrollTo: (href: string) => void;
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </section>
  );
}

export default function HeroSections({ scrollTo }: HeroSectionsProps) {
  return (
    <>
      {/* HERO */}
      <div id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0A]/95 via-[#0F0D0A]/70 to-[#0F0D0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A] via-transparent to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase">Натуральный камень</span>
              </div>
            </div>

            <h1
              className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6 animate-fade-in opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              ГРАНИТ<br />
              <span className="text-[#C9A84C]">ЦЕНТР</span>
            </h1>

            <p
              className="text-lg md:text-xl text-[#C4AE98] max-w-xl leading-relaxed mb-10 animate-fade-in opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Облицовка натуральным камнем, вентилируемые фасады, входные группы и ЧПУ-обработка в Нижнем Новгороде
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() => scrollTo("#contacts")}
                className="bg-[#C9A84C] text-[#0F0D0A] px-10 py-4 font-oswald font-semibold tracking-widest text-sm uppercase hover:bg-[#E8C97A] transition-all duration-300 hover:scale-105"
              >
                Получить консультацию
              </button>
              <button
                onClick={() => scrollTo("#portfolio")}
                className="border border-[#C9A84C]/50 text-[#C9A84C] px-10 py-4 font-oswald font-medium tracking-widest text-sm uppercase hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
              >
                Наши проекты
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
          <span className="text-[#C9A84C] text-xs tracking-widest uppercase">Прокрутите</span>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="bg-[#C9A84C] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-oswald text-4xl md:text-5xl font-bold text-[#0F0D0A] mb-1">{s.value}</div>
              <div className="text-[#3d3128] text-sm tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">О компании</span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              НАДЁЖНОСТЬ,<br />ПРОВЕРЕННАЯ ВРЕМЕНЕМ
            </h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] mb-8" />
            <p className="text-[#C4AE98] leading-relaxed mb-6">
              <strong className="text-white">Гранит Центр</strong> — ведущий поставщик и подрядчик по облицовке натуральным камнем в Нижегородской области. Более 12 лет мы реализуем проекты любой сложности: от облицовки частных домов до фасадов крупных бизнес-центров.
            </p>
            <p className="text-[#C4AE98] leading-relaxed mb-8">
              Собственный парк ЧПУ-оборудования позволяет выполнять изделия нестандартных форм и сложные декоративные элементы с высочайшей точностью прямо на нашем производстве.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Прямые поставки с карьеров",
                "Собственное производство с ЧПУ-оборудованием",
                "Опытные бригады монтажников",
                "Гарантия на все виды работ",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C9A84C] rotate-45 flex-shrink-0" />
                  <span className="text-[#EDE6DF]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src={TEXTURE_IMG} alt="Натуральный камень" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] p-6 shadow-2xl">
              <div className="font-oswald text-4xl font-bold text-[#0F0D0A] leading-none">12+</div>
              <div className="text-[#0F0D0A] text-sm mt-1">лет опыта</div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#C9A84C]/30" />
          </div>
        </div>
      </Section>
    </>
  );
}
