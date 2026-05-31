import Icon from "@/components/ui/icon";
import { Section } from "./HeroSections";
import { SERVICES, PROJECTS, CNC_CAPABILITIES, CNC_IMG } from "./data";

interface ServicesSectionsProps {
  scrollTo: (href: string) => void;
}

export default function ServicesSections({ scrollTo }: ServicesSectionsProps) {
  return (
    <>
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
                    <Icon name="Mail" size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#9a8470] text-xs tracking-wider uppercase mb-1">Электронная почта</div>
                    <a
                      href="mailto:gcinfo@yandex.ru"
                      className="font-oswald text-xl font-semibold text-white hover:text-[#C9A84C] transition-colors"
                    >
                      gcinfo@yandex.ru
                    </a>
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
    </>
  );
}
