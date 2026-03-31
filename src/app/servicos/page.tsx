import Image from "next/image";
import Link from "next/link";

const servicesDetails = [
  {
    emoji: "🎨",
    title: "Aulas de Pintura",
    description: "Técnicas de pintura a óleo, acrílica e explorações cromáticas contemporâneas. Aprenda desde a teoria das cores até a execução de grandes telas.",
    features: ["Óleo sobre Tela", "Acrílica", "Aquarela"],
    image: "/images/aluna1.png",
    bg: "var(--color-surface-container-lowest)",
  },
  {
    emoji: "🌀",
    title: "Pintura de Mandalas",
    description: "Arte relaxante e terapêutica para encontrar seu centro e equilíbrio interior através da geometria e das cores vibrantes.",
    features: ["Geometria Sagrada", "Pontilhismo", "Intuição"],
    image: "/images/aluna4.png",
    bg: "var(--color-secondary-fixed)",
  },
  {
    emoji: "🔷",
    title: "Mosaicos",
    description: "Criação de peças únicas através da composição cuidadosa de fragmentos, transformando o quebrado em obra de arte.",
    features: ["Azulejos", "Vidros", "Pedras"],
    image: "/images/aluna3.png",
    bg: "var(--color-surface-container-low)",
  },
  {
    emoji: "🪵",
    title: "MDF e Decopagem",
    description: "Personalização de objetos utilitários e decorativos com técnicas artesanais delicadas para transformar sua casa.",
    features: ["Caixas", "Móveis Pequenos", "Papel"],
    image: "/images/escultura_decorada.png",
    bg: "var(--color-surface-container-lowest)",
  },
  {
    emoji: "💜",
    title: "Arte Terapia",
    description: "Acolhimento e bem-estar profundo através da expressão artística livre para crianças e adultos.",
    features: ["Expressão Livre", "Autoconhecimento", "Relaxamento"],
    image: "/images/artista_01.png",
    bg: "rgba(138,72,83,0.05)",
  },
  {
    emoji: "🛠️",
    title: "Restauração",
    description: "Renovação de peças antigas devolvendo vida e história aos seus pertences, preservando memórias familiares.",
    features: ["Madeira", "Gesso", "Porcelana"],
    image: "/images/pecas_exclusivas.png",
    bg: "var(--color-surface-variant)",
  },
];

export default function ServicosPage() {
  return (
    <main className="pt-32 min-h-screen" style={{ background: "var(--color-surface)" }}>
      {/* Hero da Página */}
      <section className="py-20 px-8 container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="font-label text-xs uppercase tracking-[0.4em] font-bold text-[#8a4853]/70">
            Nossa Prática
          </span>
          <h1 className="font-headline text-7xl font-bold italic" style={{ color: "var(--color-primary)" }}>
            Nossas Modalidades
          </h1>
          <p className="font-body text-2xl leading-relaxed text-[#524345] opacity-70">
            Encontre o caminho artístico que mais combina com seu momento atual.
          </p>
        </div>
      </section>

      {/* Grid de Serviços — Detalhado */}
      <section className="py-16 px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesDetails.map((srv, i) => (
            <div 
              key={srv.title} 
              className="flex flex-col group overflow-hidden rounded-[3rem] transition-all hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: srv.bg }}
            >
              {/* Imagem do Serviço */}
              <div className="relative h-[300px] overflow-hidden">
                <Image src={srv.image} alt={srv.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div 
                  className="absolute top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-xl"
                  style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)" }}
                >
                  {srv.emoji}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-headline text-3xl font-bold italic" style={{ color: "var(--color-primary)" }}>
                    {srv.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed opacity-70">
                    {srv.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {srv.features.map(feat => (
                      <span key={feat} className="font-label text-xs px-3 py-1.5 rounded-full border border-[#8a4853]/10 bg-[#8a4853]/5 text-[#8a4853]">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link href="/contato" className="font-label text-xs font-bold uppercase tracking-widest text-[#8a4853] hover:underline underline-offset-8">
                    Tenho Interesse →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Decoração Aquarela */}
      <div className="w-full h-40 relative flex justify-center items-center overflow-hidden opacity-30 mt-10">
        <div className="absolute w-64 h-64 animate-drift rotate-12">
          <Image src="/images/elemento4.jpg" alt="" fill className="object-contain mix-blend-multiply" />
        </div>
      </div>

      {/* CTA Final */}
      <section className="py-24 text-center px-8">
        <div className="max-w-2xl mx-auto space-y-10">
          <h3 className="font-headline text-4xl font-bold italic leading-tight" style={{ color: "var(--color-primary)" }}>
            Não sabe por onde começar? Agende uma aula experimental gratuita.
          </h3>
          <Link href="/contato" className="btn-primary px-12 py-5 text-lg shadow-2xl">
            Falar com a Professora
          </Link>
        </div>
      </section>
    </main>
  );
}
