import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="pt-32 min-h-screen" style={{ background: "var(--color-surface)" }}>
      {/* Hero da Página Sobre */}
      <section className="py-20 px-8 lg:px-16 container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-label text-xs uppercase tracking-[0.4em] font-bold text-[#8a4853]/70">
            Nossa Jornada
          </span>
          <h1 className="font-headline text-7xl font-bold italic" style={{ color: "var(--color-primary)" }}>
            25 Anos Cultivando o Sensível.
          </h1>
          <p className="font-body text-2xl leading-relaxed text-[#524345]">
            O Espaço da Arte é mais do que um ateliê; é um legado de afeto, 
            técnica e transformação através das mãos.
          </p>
        </div>
      </section>

      {/* Grid de História e Imagens */}
      <section className="py-20 px-8 lg:px-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/artista_01.png" 
              alt="Mestra do Ateliê" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl font-bold italic" style={{ color: "var(--color-primary)" }}>
                Onde Tudo Começou
              </h2>
              <div className="space-y-4 font-body text-lg leading-relaxed text-[#524345]">
                <p>
                  Fundado em 1999, o Espaço da Arte nasceu do desejo de criar um ambiente 
                  onde a técnica artística se encontrasse com a terapia do bem-estar. 
                </p>
                <p>
                  Ao longo de duas décadas e meia, vimos milhares de alunos descobrirem não apenas 
                  como misturar cores ou esculpir formas, mas como encontrar silêncio e paz 
                  em meio à correria do cotidiano.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-[#d7c1c3]/30">
              <div>
                <p className="font-headline text-3xl font-bold" style={{ color: "var(--color-primary)" }}>1999</p>
                <p className="font-label text-xs uppercase tracking-widest mt-1">Ano de Fundação</p>
              </div>
              <div>
                <p className="font-headline text-3xl font-bold" style={{ color: "var(--color-primary)" }}>6.000+</p>
                <p className="font-label text-xs uppercase tracking-widest mt-1">Vidas Transformadas</p>
              </div>
            </div>

            <div className="bg-[#8a4853] p-10 rounded-[2.5rem] text-white space-y-4">
              <h3 className="font-headline text-2xl font-bold italic">Nossa Missão</h3>
              <p className="font-body text-lg opacity-90 leading-relaxed">
                "Proporcionar uma experiência artística que alimente a alma, 
                estimule a criatividade e promova o equilíbrio emocional 
                em todas as fases da vida."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Decoração Aquarela */}
      <div className="w-full h-40 relative flex justify-center items-center overflow-hidden opacity-30">
        <div className="absolute w-64 h-64 animate-drift">
          <Image src="/images/Elemento1.jpg" alt="" fill className="object-contain mix-blend-multiply" />
        </div>
      </div>

      {/* Nossa Equipe/Ambiente */}
      <section className="py-24 px-8 lg:px-16 container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-5xl font-bold italic" style={{ color: "var(--color-primary)" }}>
            Um Espaço de Acolhimento
          </h2>
          <p className="font-body text-xl max-w-2xl mx-auto opacity-70">
            Cada detalhe do nosso ateliê foi planejado para que você se sinta em casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "/images/aluna3.png", title: "Luz Natural", desc: "Ambiente amplo e iluminado para a melhor percepção das cores." },
            { img: "/images/turmainfantil.png", title: "Material Incluso", desc: "Oferecemos os melhores insumos para sua prática artística." },
            { img: "/images/artista_02.png", title: "Comunidade", desc: "Troca de experiências e amizades que vão além do ateliê." },
          ].map((item, i) => (
            <div key={i} className="space-y-6 group">
              <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="px-4">
                <h4 className="font-headline text-2xl font-bold italic" style={{ color: "var(--color-primary)" }}>{item.title}</h4>
                <p className="font-body text-base opacity-70 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 text-center px-8">
        <div className="max-w-lg mx-auto space-y-10">
          <h3 className="font-headline text-4xl font-bold italic leading-tight" style={{ color: "var(--color-primary)" }}>
            Queremos fazer parte da sua história.
          </h3>
          <Link href="/contato" className="btn-primary px-12 py-5 text-lg">
            Agendar uma Visita
          </Link>
        </div>
      </section>
    </main>
  );
}
