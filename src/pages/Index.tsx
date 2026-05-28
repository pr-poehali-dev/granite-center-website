import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c4ff88e3-6402-43db-b819-0d5e9684e8b6/files/c41966ba-2009-4643-abbb-d4f620db2e0b.jpg";
const CNC_IMG = "https://cdn.poehali.dev/projects/c4ff88e3-6402-43db-b819-0d5e9684e8b6/files/1787ffd5-de65-4d9c-9e31-67c29ca91eae.jpg";
const TEXTURE_IMG = "https://cdn.poehali.dev/projects/c4ff88e3-6402-43db-b819-0d5e9684e8b6/files/6e3c3206-f56a-451f-8f01-d5d42c451129.jpg";
const ENTRANCE_IMG = "https://cdn.poehali.dev/projects/c4ff88e3-6402-43db-b819-0d5e9684e8b6/files/a00be0d6-dc1e-42a5-8e90-430e415b237a.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "ЧПУ обработка", href: "#cnc" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Building2",
    title: "Облицовка натуральным камнем",
    desc: "Облицовка фасадов, интерьеров и экстерьеров гранитом, мрамором, известняком и другим натуральным камнем.",
  },
  {
    icon: "Package",
    title: "Поставка натурального камня",
    desc: "Широкий ассортимент натурального камня напрямую от производителей. Гранит, мрамор, сланец, травертин.",
  },
  {
    icon: "Layers",
    title: "Вентилируемый фасад",
    desc: "Устройство систем вентилируемого фасада из натурального камня. Долговечность и энергоэффективность.",
  },
  {
    icon: "DoorOpen",
    title: "Входные группы",
    desc: "Монтаж представительных входных групп из натурального камня. Ступени, колонны, порталы.",
  },
  {
    icon: "Columns",
    title: "Монтаж цоколей",
    desc: "Облицовка цокольной части зданий натуральным камнем. Защита и эстетика на десятилетия.",
  },
  {
    icon: "Cpu",
    title: "ЧПУ обработка",
    desc: "Фрезеровка, гравировка, резка сложных форм на оборудовании с ЧПУ. Точность до 0,1 мм.",
  },
];

const PROJECTS = [
  {
    img: HERO_IMG,
    title: "Фасад бизнес-центра",
    location: "Нижний Новгород",
    material: "Гранит чёрный Абсолют",
    area: "1 200 м²",
  },
  {
    img: ENTRANCE_IMG,
    title: "Входная группа ТЦ",
    location: "Нижегородская обл.",
    material: "Гранит Балтик Браун",
    area: "320 м²",
  },
  {
    img: TEXTURE_IMG,
    title: "Вентилируемый фасад",
    location: "Нижний Новгород",
    material: "Гранит серый",
    area: "850 м²",
  },
  {
    img: CNC_IMG,
    title: "Облицовка жилого комплекса",
    location: "Нижегородская обл.",
    material: "Мрамор Bianco",
    area: "2 100 м²",
  },
  {
    img: ENTRANCE_IMG,
    title: "Цоколь административного здания",
    location: "Нижний Новгород",
    material: "Гранит Мансуровский",
    area: "480 м²",
  },
  {
    img: HERO_IMG,
    title: "Ступени и площадки",
    location: "Нижний Новгород",
    material: "Гранит Ред Саволакс",
    area: "260 м²",
  },
];

const CNC_CAPABILITIES = [
  { icon: "Scissors", title: "Фигурная резка", desc: "Сложные геометрические формы, арки, колонны" },
  { icon: "PenTool", title: "Гравировка", desc: "Надписи, логотипы, орнаменты любой сложности" },
  { icon: "Maximize2", title: "Фрезерование", desc: "Рельефные поверхности, профили, карнизы" },
  { icon: "LayoutGrid", title: "Перфорация", desc: "Декоративные отверстия и паттерны в камне" },
];

const STATS = [
  { value: "12+", label: "лет на рынке" },
  { value: "350+", label: "реализованных проектов" },
  { value: "50 000+", label: "м² уложено камня" },
  { value: "100%", label: "гарантия качества" },
];

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

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
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

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0F0D0A]/95 backdrop-blur-md border-b border-[#2D2518]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C9A84C] flex items-center justify-center">
              <span className="text-[#0F0D0A] font-oswald font-bold text-sm">ГЦ</span>
            </div>
            <div>
              <div className="font-oswald font-semibold text-lg tracking-widest text-white leading-tight">ГРАНИТ ЦЕНТР</div>
              <div className="text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase">Нижний Новгород</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="nav-link text-sm tracking-wider text-[#C4AE98] hover:text-[#C9A84C] transition-colors duration-300 uppercase"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:+79159377066"
            className="hidden lg:flex items-center gap-2 bg-[#C9A84C] text-[#0F0D0A] px-5 py-2.5 font-oswald font-medium tracking-wider text-sm hover:bg-[#E8C97A] transition-colors duration-300"
          >
            <Icon name="Phone" size={14} />
            +7 (915) 937-70-66
          </a>

          <button
            className="lg:hidden text-[#C9A84C]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#1a1612]/98 backdrop-blur-xl border-t border-[#2D2518]">
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left font-oswald text-lg tracking-wider text-[#EDE6DF] hover:text-[#C9A84C] transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="tel:+79159377066"
                className="mt-2 bg-[#C9A84C] text-[#0F0D0A] px-5 py-3 font-oswald font-medium tracking-wider text-center"
              >
                +7 (915) 937-70-66
              </a>
            </div>
          </div>
        )}
      </header>

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

      {/* SERVICES */}
      <Section id="services" className="py-24 px-6 bg-[#111009]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Что мы делаем</span>
              <div className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-3">НАШИ УСЛУГИ</h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="group bg-[#1a1612] border border-[#2D2518] p-8 hover:-translate-y-1 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
                  <Icon name={s.icon} fallback="Square" size={22} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-oswald text-xl font-semibold text-white mb-3 tracking-wide group-hover:text-[#C9A84C] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#9a8470] text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-[#C9A84C]/0 via-[#C9A84C]/40 to-[#C9A84C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Реализованные проекты</span>
              <div className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-3">ПОРТФОЛИО</h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={i} className="group relative overflow-hidden cursor-pointer">
                <div className="relative" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0A] via-[#0F0D0A]/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">{p.material}</div>
                  <h3 className="font-oswald text-xl font-semibold text-white mb-1">{p.title}</h3>
                  <div className="flex items-center gap-4 text-[#9a8470] text-sm">
                    <span className="flex items-center gap-1">
                      <Icon name="MapPin" size={12} />
                      {p.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Maximize2" size={12} />
                      {p.area}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C9A84C]/0 group-hover:border-[#C9A84C]/80 transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollTo("#contacts")}
              className="border border-[#C9A84C]/50 text-[#C9A84C] px-12 py-4 font-oswald font-medium tracking-widest text-sm uppercase hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
            >
              Обсудить ваш проект
            </button>
          </div>
        </div>
      </Section>

      {/* CNC */}
      <Section id="cnc" className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${CNC_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0D0A] via-transparent to-[#0F0D0A]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Высокая точность</span>
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                ЧПУ ОБРАБОТКА<br />НАТУРАЛЬНОГО КАМНЯ
              </h2>
              <div className="w-14 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] mb-8" />
              <p className="text-[#C4AE98] leading-relaxed mb-8">
                Собственный цех с ЧПУ-оборудованием позволяет воплощать любые архитектурные идеи в камне. Мы работаем с гранитом, мрамором, известняком и другими породами, создавая изделия нестандартных форм с точностью до десятых долей миллиметра.
              </p>
              <div className="bg-[#1a1612]/80 border border-[#C9A84C]/20 p-6 mb-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Точность обработки", value: "±0.1 мм" },
                    { label: "Размер заготовки", value: "до 3000×1500 мм" },
                    { label: "Толщина материала", value: "от 10 до 200 мм" },
                    { label: "Срок изготовления", value: "от 3 рабочих дней" },
                  ].map((spec, i) => (
                    <div key={i}>
                      <div className="text-[#9a8470] text-xs tracking-wider uppercase mb-1">{spec.label}</div>
                      <div className="font-oswald text-lg font-semibold text-[#C9A84C]">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => scrollTo("#contacts")}
                className="bg-[#C9A84C] text-[#0F0D0A] px-10 py-4 font-oswald font-semibold tracking-widest text-sm uppercase hover:bg-[#E8C97A] transition-all duration-300 hover:scale-105"
              >
                Запросить расчёт
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CNC_CAPABILITIES.map((c, i) => (
                <div
                  key={i}
                  className="bg-[#1a1612]/80 border border-[#2D2518] p-6 hover:border-[#C9A84C]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <Icon name={c.icon} fallback="Square" size={28} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-oswald text-lg font-semibold text-white mb-2">{c.title}</h3>
                  <p className="text-[#9a8470] text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACTS */}
      <Section id="contacts" className="py-24 px-6 bg-[#111009]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Связаться с нами</span>
              <div className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-3">КОНТАКТЫ</h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <p className="text-[#C4AE98] leading-relaxed text-lg">
                Готовы ответить на все вопросы и рассчитать стоимость вашего проекта. Позвоните нам или оставьте заявку — перезвоним в течение часа.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#9a8470] text-xs tracking-wider uppercase mb-1">Телефон</div>
                    <a
                      href="tel:+79159377066"
                      className="font-oswald text-2xl font-semibold text-white hover:text-[#C9A84C] transition-colors"
                    >
                      +7 (915) 937-70-66
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#9a8470] text-xs tracking-wider uppercase mb-1">Адрес</div>
                    <div className="text-white text-lg leading-relaxed">
                      г. Нижний Новгород,<br />
                      ул. Мориса Тореза, д. 15а
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#9a8470] text-xs tracking-wider uppercase mb-1">Режим работы</div>
                    <div className="text-white text-lg">Пн–Пт: 9:00–18:00</div>
                    <div className="text-[#9a8470]">Сб: 10:00–15:00</div>
                  </div>
                </div>
              </div>

              <a
                href="tel:+79159377066"
                className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] text-[#0F0D0A] px-8 py-4 font-oswald font-semibold tracking-widest text-sm uppercase hover:bg-[#E8C97A] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Icon name="Phone" size={16} />
                Позвонить сейчас
              </a>
            </div>

            {/* Contact form */}
            <div className="bg-[#1a1612] border border-[#2D2518] p-8">
              <h3 className="font-oswald text-2xl font-semibold text-white mb-2">Оставить заявку</h3>
              <p className="text-[#9a8470] text-sm mb-8">Перезвоним в течение часа в рабочее время</p>
              <div className="space-y-4">
                <div>
                  <label className="text-[#9a8470] text-xs tracking-wider uppercase block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    className="w-full bg-[#0F0D0A] border border-[#2D2518] text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#6b5a48]"
                  />
                </div>
                <div>
                  <label className="text-[#9a8470] text-xs tracking-wider uppercase block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0F0D0A] border border-[#2D2518] text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#6b5a48]"
                  />
                </div>
                <div>
                  <label className="text-[#9a8470] text-xs tracking-wider uppercase block mb-2">Описание проекта</label>
                  <textarea
                    placeholder="Расскажите о вашем объекте..."
                    rows={4}
                    className="w-full bg-[#0F0D0A] border border-[#2D2518] text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#6b5a48] resize-none"
                  />
                </div>
                <button className="w-full bg-[#C9A84C] text-[#0F0D0A] py-4 font-oswald font-semibold tracking-widest text-sm uppercase hover:bg-[#E8C97A] transition-colors duration-300">
                  Отправить заявку
                </button>
                <p className="text-[#6b5a48] text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-[#2D2518] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#C9A84C] flex items-center justify-center">
              <span className="text-[#0F0D0A] font-oswald font-bold text-xs">ГЦ</span>
            </div>
            <span className="font-oswald text-sm tracking-widest text-[#C4AE98]">ГРАНИТ ЦЕНТР</span>
          </div>
          <div className="text-[#6b5a48] text-sm text-center">
            г. Нижний Новгород, ул. Мориса Тореза, д. 15а &nbsp;|&nbsp;
            <a href="tel:+79159377066" className="hover:text-[#C9A84C] transition-colors">+7 (915) 937-70-66</a>
          </div>
          <div className="text-[#6b5a48] text-sm">
            © 2024 Гранит Центр. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}