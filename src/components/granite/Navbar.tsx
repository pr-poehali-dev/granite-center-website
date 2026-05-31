import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "./data";

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function Navbar({ scrolled, menuOpen, setMenuOpen, scrollTo }: NavbarProps) {
  return (
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

        <div className="hidden lg:flex flex-col items-end gap-1">
          <a
            href="tel:+79159377066"
            className="flex items-center gap-2 bg-[#C9A84C] text-[#0F0D0A] px-5 py-2 font-oswald font-medium tracking-wider text-sm hover:bg-[#E8C97A] transition-colors duration-300"
          >
            <Icon name="Phone" size={14} />
            +7 (915) 937-70-66
          </a>
          <a
            href="mailto:gcinfo@yandex.ru"
            className="flex items-center gap-2 text-[#C4AE98] hover:text-[#C9A84C] transition-colors duration-300 text-xs px-1"
          >
            <Icon name="Mail" size={12} />
            gcinfo@yandex.ru
          </a>
        </div>

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
  );
}
