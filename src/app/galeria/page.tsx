import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/aluna1.png", alt: "Exposição Espaço da Arte", category: "Exposição" },
  { src: "/images/aluna2.png", alt: "Aluna Pintura", category: "Aulas" },
  { src: "/images/aluna3.png", alt: "Mosaico Detail", category: "Mosaico" },
  { src: "/images/aluna4.png", alt: "Mandala Colorida", category: "Mandalas" },
  { src: "/images/aluna5.png", alt: "Peça Artesanal", category: "MDF" },
  { src: "/images/aluna6.png", alt: "Expressão Artística", category: "Aulas" },
  { src: "/images/pecas_exclusivas.png", alt: "Coleção Exclusiva", category: "Produtos" },
  { src: "/images/escultura_decorada.png", alt: "Escultura Gesso", category: "Restauração" },
  { src: "/images/turmainfantil.png", alt: "Turma de Crianças", category: "Aulas" },
  { src: "/images/artista_01.png", alt: "Mão na Massa", category: "Ações" },
  { src: "/images/Artista_02.png", alt: "Criação Digital", category: "Digital" },
];

export default function GaleriaPage() {
  return (
    <main className="pt-32 min-h-screen" style={{ background: "var(--color-surface)" }}>
      {/* Hero */}
      <section className="py-20 px-8 container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="font-label text-xs uppercase tracking-[0.4em] font-bold text-[#8a4853]/70">
            Portfolio
          </span>
          <h1 className="font-headline text-7xl font-bold italic" style={{ color: "var(--color-primary)" }}>
            Nosso Universo Criativo
          </h1>
          <p className="font-body text-xl opacity-70">
            Uma seleção de obras, aulas e momentos especiais que definem o Espaço da Arte.
          </p>
        </div>
      </section>

      {/* Grid de Galeria */}
      <section className="py-16 px-8 container mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all break-inside-avoid">
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={600} 
                height={800} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="font-label text-xs uppercase tracking-widest text-white/70 mb-1">
                  {img.category}
                </span>
                <h4 className="font-headline text-xl font-bold italic text-white">
                  {img.alt}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decoração Aquarela */}
      <div className="w-full h-40 relative flex justify-center items-center overflow-hidden opacity-30 mt-10">
        <div className="absolute w-72 h-72 animate-rotate-slow -rotate-45">
          <Image src="/images/elemento6.jpg" alt="" fill className="object-contain mix-blend-multiply" />
        </div>
      </div>

      {/* CTA Final */}
      <section className="py-24 text-center px-8">
        <div className="max-w-xl mx-auto space-y-10">
          <h3 className="font-headline text-4xl font-bold italic leading-tight" style={{ color: "var(--color-primary)" }}>
            Inspire-se a criar sua própria obra.
          </h3>
          <Link href="/contato" className="btn-primary px-12 py-5 text-lg shadow-2xl">
            Entrar em Contato
          </Link>
        </div>
      </section>
    </main>
  );
}
