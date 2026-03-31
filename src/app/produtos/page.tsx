export default function Produtos() {
  const products = [
    {
      id: 1,
      name: "Quadro Pintado à Mão",
      description: "Pintura original em tela, técnica mista",
      price: "Sob consulta",
      image: "/images/elemento2.jpg",
    },
    {
      id: 2,
      name: "Madeira Decorada MDF",
      description: "Peça artesanal personalizada",
      price: "Sob consulta",
      image: "/images/elemento4.jpg",
    },
    {
      id: 3,
      name: "Mosaico Artístico",
      description: "Criação exclusiva em mosaico",
      price: "Sob consulta",
      image: "/images/elemento3.jpg",
    },
    {
      id: 4,
      name: "Escultura Decorativa",
      description: "Peça única feita à mão",
      price: "Sob consulta",
      image: "/images/elemento5.jpg",
    },
    {
      id: 5,
      name: "Quadro Mandala",
      description: "Pintura com técnicas diversas",
      price: "Sob consulta",
      image: "/images/elemento1.jpg",
    },
    {
      id: 6,
      name: "Peça Personalizada",
      description: "Sob encomenda según seu desejo",
      price: "Sob consulta",
      image: "/images/elemento6.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-rose-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Produtos</h1>
          <p className="text-xl opacity-90">Peças exclusivas feitas à mão no ateliê</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-rose-500 font-bold">{product.price}</span>
                    <a
                      href="https://wa.me/5519999999999?text=Olá, gostaria de informações sobre o produto: {product.name}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      Solicitar Info
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-rose-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Peças Sob Encomenda
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Aceitamos encomendas personalizadas. Entre em contato pelo WhatsApp 
              e conte-nos sua ideia. Criamos especialmente para você!
            </p>
            <a
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Encomendar Peça
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
