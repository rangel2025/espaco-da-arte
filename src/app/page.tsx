import Image from "next/image";
import Link from "next/link";

/* ================================================================
   HERO — Desktop-first: imagem à direita, texto à esquerda
   ================================================================ */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-20"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Elementos de Aquarela Decorativa — Sutil */}
      <div className="absolute top-20 -left-10 w-64 h-64 opacity-20 pointer-events-none animate-drift">
        <Image src="/images/Elemento1.jpg" alt="" fill className="object-contain mix-blend-multiply" />
      </div>
      <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-15 pointer-events-none animate-rotate-slow">
        <Image src="/images/elemento2.jpg" alt="" fill className="object-contain mix-blend-multiply" />
      </div>

      {/* Orbs de fundo */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "rgba(245,218,244,0.28)",
          filter: "blur(100px)",
          animation: "floatOrb 8s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Conteúdo textual ── */}
          <div className="space-y-10" style={{ animation: "fadeInUp 0.7s ease forwards" }}>
            {/* Tag */}
            <span
              className="font-label text-xs uppercase tracking-[0.4em] font-bold"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Tradição &amp; Afeto · Americana/SP
            </span>

            {/* Título grande */}
            <h1
              className="font-headline text-7xl xl:text-8xl font-bold italic leading-[1.0]"
              style={{ color: "var(--color-primary)" }}
            >
              Espaço<br />da Arte
            </h1>

            {/* Subtítulo */}
            <p
              className="font-body text-xl xl:text-2xl leading-relaxed max-w-lg"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Onde a arte se torna terapia há mais de 25 anos.
              Criatividade, expressão e acolhimento em cada pincelada.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10 py-8 border-y" style={{ borderColor: "rgba(215,193,195,0.30)" }}>
              {[
                { num: "25+", label: "Anos de História" },
                { num: "600+", label: "Alunos Formados" },
                { num: "6+", label: "Modalidades" },
              ].map((stat) => (
                <div key={stat.label} className="">
                  <p className="font-headline text-4xl font-bold" style={{ color: "var(--color-primary)" }}>
                    {stat.num}
                  </p>
                  <p className="font-label text-[10px] uppercase tracking-widest mt-1 opacity-70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <Link href="/contato" className="btn-primary text-base px-12 py-5 shadow-2xl">
                Agendar Aula Experimental
              </Link>
              <Link href="/sobre" className="btn-secondary text-base px-10 py-5">
                Nossa História
              </Link>
            </div>
          </div>

          {/* ── Coluna de imagem ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decoração Aquarela atrás da foto */}
            <div className="absolute -top-10 -right-10 w-72 h-72 opacity-30 pointer-events-none animate-rotate-slow">
              <Image src="/images/elemtno3.jpg" alt="" fill className="object-contain mix-blend-multiply" />
            </div>

            {/* Imagem principal */}
            <div
              className="relative w-full max-w-md xl:max-w-lg overflow-hidden group"
              style={{
                borderRadius: "4rem",
                boxShadow: "0 60px 100px rgba(138,72,83,0.22)",
                height: "640px",
              }}
            >
              <Image
                src="/images/aluna1.png"
                alt="Aluna e professora no ateliê Espaço da Arte"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)" }}
              />
              
              {/* Badge "Desde 1999" MAIOR */}
              <div
                className="absolute bottom-8 left-8 flex items-center gap-5 px-6 py-5"
                style={{
                  background: "rgba(255,248,239,0.92)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  borderRadius: "2.5rem",
                  boxShadow: "0 12px 32px rgba(138,72,83,0.15)",
                }}
              >
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/logotipo.jpg"
                    alt="Logo"
                    fill
                    className="object-contain mix-blend-multiply"
                  />
                </div>
                <div>
                  <p className="font-label text-[11px] uppercase tracking-[0.2em] font-extrabold" style={{ color: "var(--color-primary)" }}>
                    Desde 1999
                  </p>
                  <p className="font-headline italic text-lg font-bold" style={{ color: "var(--color-on-surface)" }}>
                    Americana / SP
                  </p>
                </div>
              </div>
            </div>

            {/* Card flutuante — Arte Terapia */}
            <div
              className="absolute -bottom-10 -left-10 hidden lg:block"
              style={{
                background: "var(--color-surface-container-lowest)",
                borderRadius: "2.5rem",
                padding: "1.5rem",
                boxShadow: "0 30px 60px rgba(138,72,83,0.12)",
                width: "220px",
                animation: "drift 10s ease-in-out infinite reverse",
              }}
            >
              <div className="relative h-32 rounded-3xl overflow-hidden mb-4">
                <Image
                  src="/images/artista_01.png"
                  alt="Artista trabalhando"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <h4 className="font-headline text-base font-bold italic" style={{ color: "var(--color-primary)" }}>
                Arte &amp; Terapia
              </h4>
              <p className="font-body text-xs mt-1" style={{ color: "var(--color-on-surface-variant)" }}>
                Acolhimento criativo para todas as idades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SERVICES — Grid de 3 colunas em desktop
   ================================================================ */
const services = [
  {
    emoji: "🎨",
    title: "Aulas de Pintura",
    description: "Técnicas de pintura a óleo, acrílica e explorações cromáticas contemporâneas.",
    bg: "var(--color-surface-container-lowest)",
  },
  {
    emoji: "🌀",
    title: "Pintura de Mandalas",
    description: "Arte relaxante e terapêutica para encontrar seu centro e equilíbrio interior.",
    bg: "var(--color-secondary-fixed)",
  },
  {
    emoji: "🔷",
    title: "Mosaicos",
    description: "Criação de peças únicas através da composição cuidadosa de fragmentos.",
    bg: "var(--color-surface-container-low)",
  },
  {
    emoji: "🪵",
    title: "MDF e Decopagem",
    description: "Personalização de objetos e móveis com técnicas artesanais delicadas.",
    bg: "var(--color-surface-container-lowest)",
  },
  {
    emoji: "💜",
    title: "Arte Terapia",
    description: "Acolhimento e bem-estar profundo através da expressão artística livre.",
    bg: "rgba(138,72,83,0.05)",
  },
  {
    emoji: "🛠️",
    title: "Restauração",
    description: "Renovação de peças antigas devolvendo vida e história aos seus pertences.",
    bg: "var(--color-surface-variant)",
  },
];

function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-32 relative overflow-hidden"
      style={{ background: "var(--color-surface-container)" }}
    >
      {/* Decoração Aquarela */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 opacity-10 pointer-events-none animate-rotate-slow">
        <Image src="/images/elemento4.jpg" alt="" fill className="object-contain mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="flex items-end justify-between mb-20">
          <div className="max-w-xl space-y-4">
            <span
              className="font-label text-xs uppercase tracking-[0.3em] font-bold"
              style={{ color: "rgba(138,72,83,0.70)" }}
            >
              Fomentando a Criatividade
            </span>
            <h2
              className="font-headline text-6xl font-bold leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Nossa Prática Artística
            </h2>
          </div>
          <Link href="/servicos" className="btn-secondary hidden md:inline-flex px-12 py-4">
            Explorar Tudo →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <div
              key={srv.title}
              className="p-10 space-y-6 transition-all duration-500 hover:-translate-y-2 group"
              style={{
                background: srv.bg,
                borderRadius: "3rem",
                boxShadow: "0 20px 50px rgba(138,72,83,0.06)",
              }}
            >
              <div
                className="w-20 h-20 flex items-center justify-center rounded-3xl text-4xl transition-transform duration-500 group-hover:scale-110"
                style={{ background: "var(--color-primary-fixed)" }}
              >
                {srv.emoji}
              </div>
              <h3
                className="font-headline text-2xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                {srv.title}
              </h3>
              <p
                className="font-body text-base leading-relaxed opacity-80"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                {srv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   ABOUT — 2 colunas: texto + grid de fotos
   ================================================================ */
function AboutSection() {
  const highlights = [
    "Experiência com Terceira Idade e Crianças",
    "Metodologia personalizada e afetiva",
    "Material de alta qualidade incluso",
    "Ateliê aconchegante com café e luz natural",
  ];

  return (
    <section
      id="sobre"
      className="py-32 relative overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Decoração Aquarela */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 opacity-15 pointer-events-none animate-drift">
        <Image src="/images/elemento5.jpg" alt="" fill className="object-contain mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* ── Texto ── */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span
                className="font-label text-xs uppercase tracking-[0.3em] font-bold"
                style={{ color: "rgba(138,72,83,0.70)" }}
              >
                Sobre o Ateliê
              </span>
              <h2
                className="font-headline text-6xl xl:text-7xl font-bold italic leading-tight"
                style={{ color: "var(--color-primary)" }}
              >
                O sensível como<br />propósito.
              </h2>
            </div>
            
            <p
              className="font-body text-xl leading-relaxed opacity-90"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Dirigido com amor por quem entende que a arte transforma, 
              o Espaço da Arte é um refúgio para quem busca desacelerar
              e se reconectar com a própria essência através das mãos.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div
                    className="w-8 h-8 rounded-2xl flex-shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#8a4853] group-hover:text-white"
                    style={{ background: "var(--color-primary-fixed)" }}
                  >
                    <svg className="w-5 h-5 transition-colors group-hover:stroke-white" fill="none" stroke="#8a4853" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-body text-sm font-bold" style={{ color: "var(--color-on-surface)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/sobre" className="btn-secondary inline-flex px-12 py-5 text-lg">
              Conheça Nossa História
            </Link>
          </div>

          {/* ── Grid de fotos assimétrico ── */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl" style={{ height: "380px", marginTop: "3rem" }}>
              <Image
                src="/images/artista_01.png"
                alt="Artista trabalhando"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl" style={{ height: "300px" }}>
              <Image
                src="/images/turmainfantil.png"
                alt="Turma infantil"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl" style={{ height: "300px" }}>
              <Image
                src="/images/escultura_decorada.png"
                alt="Escultura decorada"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl" style={{ height: "380px", marginTop: "-3rem" }}>
              <Image
                src="/images/artista_02.png"
                alt="Artista criando"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   GALLERY — Masonry horizontal em desktop
   ================================================================ */
function GallerySection() {
  return (
    <section
      id="galeria"
      className="py-32 relative overflow-hidden"
      style={{ background: "var(--color-surface-container-low)" }}
    >
      {/* Decoração Aquarela */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none animate-rotate-slow">
        <Image src="/images/elemento6.jpg" alt="" fill className="object-contain mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl space-y-4">
            <span
              className="font-label text-xs uppercase tracking-[0.3em] font-bold"
              style={{ color: "rgba(138,72,83,0.70)" }}
            >
              Nosso Portfólio
            </span>
            <h2
              className="font-headline text-6xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Arte em Movimento
            </h2>
          </div>
          <Link href="/galeria" className="btn-primary px-12 py-5 shadow-xl">
            Ver Galeria Completa
          </Link>
        </div>

        {/* Grid principal — 3 colunas em desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature — ocupa 2 colunas e altura maior */}
          <div
            className="col-span-1 sm:col-span-2 relative overflow-hidden shadow-2xl group"
            style={{ borderRadius: "3.5rem", height: "480px" }}
          >
            <Image
              src="/images/aluna1.png"
              alt="Obra dos Alunos — Exposição Espaço da Arte"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-white/70 mb-1">Destaque</p>
                <h4 className="font-headline text-2xl font-bold text-white">Exposição Annual 2024</h4>
              </div>
              <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white">
                →
              </span>
            </div>
          </div>

          {/* Coluna direita — 2 imagens empilhadas */}
          <div className="col-span-1 flex flex-col gap-8">
            <div className="relative overflow-hidden shadow-xl flex-1 group" style={{ borderRadius: "2.5rem", minHeight: "224px" }}>
              <Image
                src="/images/aluna3.png"
                alt="Trabalho em mosaico"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative overflow-hidden shadow-xl flex-1 group" style={{ borderRadius: "2.5rem", minHeight: "224px" }}>
              <Image
                src="/images/pecas_exclusivas.png"
                alt="Peças exclusivas"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Linha inferior — 3 imagens */}
          <div className="relative overflow-hidden shadow-xl group" style={{ borderRadius: "2.5rem", height: "300px" }}>
            <Image
              src="/images/aluna4.png"
              alt="Pintura mandala"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative overflow-hidden shadow-xl group" style={{ borderRadius: "2.5rem", height: "300px" }}>
            <Image
              src="/images/aluna5.png"
              alt="Cerâmica artesanal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative overflow-hidden shadow-xl group" style={{ borderRadius: "2.5rem", height: "300px" }}>
            <Image
              src="/images/aluna6.png"
              alt="Trabalho artístico"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA / LOCALIZAÇÃO — Fullwidth, 2 colunas em desktop
   ================================================================ */
function CtaSection() {
  return (
    <section
      id="contato-cta"
      className="py-32"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden group"
          style={{
            borderRadius: "4rem",
            boxShadow: "0 60px 100px rgba(138,72,83,0.25)",
          }}
        >
          {/* Lado esquerdo — texto e botões */}
          <div
            className="p-16 xl:p-20 flex flex-col justify-between gap-12 relative overflow-hidden"
            style={{ background: "var(--color-primary)" }}
          >
            {/* Decoração sutil de luz */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-[80px]" />

            <div className="space-y-6 relative z-10">
              <span className="font-label text-xs uppercase tracking-[0.4em] font-bold text-white/50">
                Comece sua Jornada
              </span>
              <h2 className="font-headline text-6xl font-bold text-white italic leading-[1.1]">
                Sua primeira aula<br />está te esperando.
              </h2>
              <p className="font-body text-white/80 text-xl leading-relaxed max-w-sm">
                Entre em contato e descubra como a arte pode transformar seu dia a dia.
              </p>
            </div>

            <div className="space-y-7 relative z-10">
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-white font-bold text-lg">Americana / SP</p>
                  <p className="font-body text-white/70 text-base">Rua das Tâmaras, 17 — Jardim São Pedro</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-white font-bold text-lg">Nossos Horários</p>
                  <p className="font-body text-white/70 text-base">Seg–Sex: 08h–18h · Sáb: 08h–12h</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a
                href="https://goo.gl/maps/seuendereco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-5 px-10 rounded-[2rem] font-bold font-body text-[#8a4853] bg-white text-lg transition-all hover:scale-105"
              >
                Como Chegar
              </a>
              <a
                href="https://wa.me/5519999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-5 px-10 rounded-[2rem] font-bold font-body text-white text-lg transition-all border border-white/20 hover:bg-white/10"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Lado direito — foto */}
          <div className="relative hidden lg:block min-h-[600px] overflow-hidden">
            <Image
              src="/images/aluna3.png"
              alt="Aluna criando no ateliê"
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(138,72,83,0.3) 0%, transparent 40%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Page Export
   ================================================================ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <CtaSection />
    </>
  );
}
