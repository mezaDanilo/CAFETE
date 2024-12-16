// src/pages/Home.tsx
const Home = () => {
  return (
    <main className="w-full px-4 py-8">
    {/* Título principal de la página */}
    <h2 className="text-3xl font-bold text-center mb-8">
        Explorar Creadoras y Creadores
    </h2>

    {/* Contenedor de la cuadrícula para las tarjetas */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Genera dinámicamente las tarjetas de creadores/as */}
        {Array.from({ length: 8 }).map((_, index) => (
            // Cada tarjeta
            <div
                key={index}
                className="bg-white text-black rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
                {/* Sección superior de la tarjeta (imagen o espacio para imagen) */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {/* Texto temporal para indicar dónde irá la imagen */}
                    <span className="text-gray-500">Imagen</span>
                </div>

                {/* Contenido textual de la tarjeta */}
                <div className="p-4">
                    {/* Nombre del creador/a */}
                    <h3 className="text-lg font-bold">
                        Creador/a {index + 1}
                    </h3>
                    {/* Descripción breve del creador/a */}
                    <p className="text-sm text-gray-600">
                        Descripción breve sobre el creador o creadora.
                    </p>
                    {/* Botón para ver el perfil del creador/a */}
                    <button className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700">
                        Ver perfil
                    </button>
                </div>
            </div>
        ))}
    </div>
</main>
);
};

export default Home;
