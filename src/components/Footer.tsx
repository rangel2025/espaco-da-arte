import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="py-16 px-8 lg:px-16"
      style={{ background: "var(--color-surface-container)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop: grid de 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: "1px solid rgba(215,193,195,0.30)" }}>

          {/* Coluna 1 — Marca */}
          <div className="md:col-span-1 space-y-4">
            <Image
              src="/images/logotipo.jpg"
              alt="Espaço da Arte"
              width={140}
              height={56}
              className="h-11 w-auto object-contain rounded-xl"
            />
            <p className="font-headline italic text-lg font-bold" style={{ color: "var(--color-primary)" }}>
              Tradição &amp; Afeto
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
              Há mais de 25 anos cultivando a arte e o bem-estar em Americana/SP.
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="space-y-4">
            <h4 className="font-label text-xs uppercase tracking-widest font-bold" style={{ color: "var(--color-primary)" }}>
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/servicos", label: "Serviços" },
                { href: "/galeria", label: "Galeria" },
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/blog", label: "Blog" },
                { href: "/contato", label: "Contato" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm transition-colors hover:text-[#8a4853]"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Modalidades */}
          <div className="space-y-4">
            <h4 className="font-label text-xs uppercase tracking-widest font-bold" style={{ color: "var(--color-primary)" }}>
              Modalidades
            </h4>
            <ul className="flex flex-col gap-3">
              {["Aulas de Pintura", "Pintura de Mandalas", "Mosaicos", "MDF e Decopagem", "Arte Terapia", "Restauração"].map((item) => (
                <li key={item} className="font-body text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contato e horários */}
          <div className="space-y-4">
            <h4 className="font-label text-xs uppercase tracking-widest font-bold" style={{ color: "var(--color-primary)" }}>
              Nos visitar
            </h4>
            <div className="font-body text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
              <p>Rua das Tâmaras, 17</p>
              <p>Jardim São Pedro</p>
              <p>Americana / SP</p>
            </div>
            <div className="font-body text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
              <p>Seg–Sex: 08h–18h</p>
              <p>Sábado: 08h–12h</p>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/5519999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2.5"
              >
                WhatsApp
              </a>
              <a
                href="https://goo.gl/maps/seuendereco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-5 py-2.5"
              >
                Mapa
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label text-xs" style={{ color: "var(--color-outline)" }}>
            © {new Date().getFullYear()} Espaço da Arte — 25 Anos de Curadoria e Afeto.
          </p>
          <div className="flex gap-6">
            {["Privacidade", "Termos", "Trabalhe Conosco"].map((item) => (
              <span key={item} className="font-label text-xs cursor-pointer hover:text-[#8a4853] transition-colors" style={{ color: "var(--color-outline)" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
