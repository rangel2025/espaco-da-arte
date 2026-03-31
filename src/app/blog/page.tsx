import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "A Arte como Terapia no Pós-Pandemia",
    excerpt: "Como as pinceladas ajudaram milhares de pessoas a reencontrarem o equilíbrio emocional nos últimos anos.",
    date: "20 Mar 2024",
    image: "/images/aluna1.png",
    category: "Arte Terapia"
  },
  {
    title: "5 Técnicas de Mosaico para Iniciantes",
    excerpt: "Descubra os materiais básicos e os primeiros passos para criar sua primeira peça em mosaico no ateliê.",
    date: "15 Mar 2024",
    image: "/images/aluna3.png",
    category: "Tutoriais"
  },
  {
    title: "Cromaticidade: O Poder das Cores",
    excerpt: "Entenda como a escolha da paleta de cores pode influenciar o resultado final da sua tela e seu humor.",
    date: "10 Mar 2024",
    image: "/images/aluna4.png",
    category: "Técnica"
  }
];

export default function BlogPage() {
  return (
    <main className="pt-32 min-h-screen" style={{ background: "var(--color-surface)" }}>
      {/* Hero */}
      <section className="py-20 px-8 container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="font-label text-xs uppercase tracking-[0.4em] font-bold text-[#8a4853]/70">
            Canto do Saber
          </span>
          <h1 className="font-headline text-7xl font-bold italic" style={{ color: "var(--color-primary)" }}>
            Blog Espaço da Arte
          </h1>
          <p className="font-body text-xl opacity-70">
            Artigos, reflexões e dicas sobre o mundo da arte e do bem-estar.
          </p>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-16 px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, i) => (
            <article key={i} className="flex flex-col group space-y-6">
              <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
                  <span className="font-label text-[10px] uppercase tracking-widest font-bold text-[#8a4853]">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4 px-2">
                <p className="font-label text-xs text-[#8a4853]/60 uppercase tracking-widest">{post.date}</p>
                <h3 className="font-headline text-3xl font-bold italic group-hover:text-[#8a4853] transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-base opacity-70 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href="#" className="inline-flex font-label text-xs font-bold uppercase tracking-widest text-[#8a4853] pt-2 hover:underline underline-offset-8">
                  Ler Artigo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Decoração Aquarela */}
      <div className="w-full h-40 relative flex justify-center items-center overflow-hidden opacity-30 mt-10">
        <div className="absolute w-80 h-80 animate-drift rotate-45">
          <Image src="/images/elemento5.jpg" alt="" fill className="object-contain mix-blend-multiply" />
        </div>
      </div>
    </main>
  );
}
