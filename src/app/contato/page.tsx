import Image from "next/image";
import Link from "next/link";

export default function ContatoPage() {
  return (
    <main className="pt-32 min-h-screen" style={{ background: "var(--color-surface)" }}>
      {/* Hero */}
      <section className="py-20 px-8 container mx-auto">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <span className="font-label text-xs uppercase tracking-[0.4em] font-bold text-[#8a4853]/70">
              Contato
            </span>
            <h1 className="font-headline text-7xl font-bold italic" style={{ color: "var(--color-primary)" }}>
              Fale Conosco
            </h1>
            <p className="font-body text-xl opacity-70 max-w-2xl mx-auto text-center">
              Tire suas dúvidas, agende sua aula experimental ou venha tomar um café conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Lado Esquerdo — Informações e CTAs */}
            <div className="space-y-12">
              <div className="space-y-6 bg-white/50 p-12 rounded-[3.5rem] border border-[#d7c1c3]/30 shadow-xl">
                <h3 className="font-headline text-3xl font-bold italic" style={{ color: "var(--color-primary)" }}>Atendimento</h3>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#ffd9dd] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#8a4853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-bold text-lg">WhatsApp / Telefone</p>
                      <a href="https://wa.me/5519999999999" target="_blank" className="font-body text-xl text-[#8a4853] hover:underline">(19) 9.9999.9999</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#ffd9dd] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#8a4853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-bold text-lg">E-mail</p>
                      <a href="mailto:contato@espacodaarte.com.br" className="font-body text-xl text-[#8a4853] hover:underline">contato@espacodaarte.com.br</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 bg-[#8a4853] p-12 rounded-[3.5rem] text-white shadow-xl">
                <h3 className="font-headline text-3xl font-bold italic">Onde Estamos</h3>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-bold text-lg text-white">Endereço Ateliê</p>
                      <p className="font-body text-lg text-white/80 leading-relaxed">
                        Rua das Tâmaras, 17 — Jardim São Pedro<br />Americana / SP — CEP: 13.000-000
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://goo.gl/maps/seuendereco" 
                    target="_blank" 
                    className="inline-flex py-4 px-10 rounded-3xl bg-white text-[#8a4853] font-bold font-body transition-transform hover:scale-105"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Lado Direito — Imagem e Horários */}
            <div className="space-y-12">
              <div className="relative h-[480px] rounded-[4rem] overflow-hidden shadow-2xl">
                <Image src="/images/artista_02.png" alt="Ambiente do Ateliê" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-12 border border-[#d7c1c3]/30 rounded-[3.5rem] space-y-6">
                <h4 className="font-headline text-2xl font-bold italic" style={{ color: "var(--color-primary)" }}>Horários de Atendimento</h4>
                <ul className="space-y-3 font-body text-lg text-[#524345]">
                  <li className="flex justify-between border-b pb-2 border-[#d7c1c3]/10">
                    <span>Segunda à Sexta</span>
                    <span className="font-bold">08:00 – 18:00</span>
                  </li>
                  <li className="flex justify-between border-b pb-2 border-[#d7c1c3]/10">
                    <span>Sábado</span>
                    <span className="font-bold">08:00 – 12:00</span>
                  </li>
                  <li className="flex justify-between opacity-50">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decoração Aquarela */}
      <div className="w-full h-60 relative flex justify-center items-center overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute w-80 h-80 animate-drift">
          <Image src="/images/elemtno3.jpg" alt="" fill className="object-contain mix-blend-multiply" />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 animate-rotate-slow">
            <Image src="/images/elemento2.jpg" alt="" fill className="object-contain mix-blend-multiply" />
        </div>
      </div>
    </main>
  );
}
