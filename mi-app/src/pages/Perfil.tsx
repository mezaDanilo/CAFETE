import React, { useState } from 'react';

const Perfil = () => {
  const [coffeeGoal] = useState({ current: 500, goal: 1000 }); // Meta de cafecitos
  const [coffeeCount, setCoffeeCount] = useState(1); // Cantidad de cafecitos a comprar

  const increaseCoffeeCount = (count: number) => {
    setCoffeeCount(count);
  };

  return (
<main className="w-full min-h-screen bg-gray-100 px-4 py-8">
            <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8">
              {/* Columna Izquierda */}
              <div className="w-full md:w-2/5 space-y-6">
                {/* Meta de cafecitos */}
                <div className="bg-gray-200 p-4 rounded-lg shadow">
                  <h3 className="text-lg font-bold text-gray-800">Meta de Cafecitos</h3>
                  <p className="text-gray-600">
                    {coffeeGoal.current} de {coffeeGoal.goal} cafecitos ({((coffeeGoal.current / coffeeGoal.goal) * 100).toFixed(1)}%)
                  </p>
                  <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden">
                    <div
                      className="bg-pink-600 h-full"
                      style={{ width: `${(coffeeGoal.current / coffeeGoal.goal) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Descripción larga */}
                <div className="bg-gray-200 p-4 rounded-lg shadow">
                  <h3 className="text-lg font-bold text-gray-800">Sobre el Creador/a</h3>
                  <p className="text-gray-600">
                    Aquí va una descripción detallada del creador/a, sus proyectos, y sus intereses. Puedes agregar detalles para personalizar este espacio.
                  </p>
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="w-full md:w-3/5 space-y-6">
                {/* Compra de cafecitos */}
                <div className="bg-gray-200 p-4 rounded-lg shadow space-y-4">
                  <h3 className="text-lg font-bold text-gray-800">Tomate unos cafecitos 😉👑☕</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => increaseCoffeeCount(1)}
                      className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      1
                    </button>
                    <button
                      onClick={() => increaseCoffeeCount(3)}
                      className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      3
                    </button>
                    <button
                      onClick={() => increaseCoffeeCount(5)}
                      className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      5
                    </button>
                    <button
                      onClick={() => increaseCoffeeCount(10)}
                      className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      10
                    </button>
                    <input
                      type="number"
                      value={coffeeCount}
                      onChange={(e) => setCoffeeCount(Number(e.target.value))}
                      className="w-16 px-2 py-1 border rounded-lg text-center"
                    />
                  </div>
                  <p className="text-gray-600">
                    Invitame {coffeeCount} Cafecito{coffeeCount > 1 ? 's' : ''}🔥 (ARS ${coffeeCount * 100} o USD ${coffeeCount * 5})
                  </p>
                </div>

                {/* Formulario de contacto */}
                <div className="bg-gray-200 p-4 rounded-lg shadow space-y-4">
                  <h3 className="text-lg font-bold text-gray-800">Dejá un mensaje</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="email"
                      placeholder="Contacto"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <textarea
                      placeholder="Mensaje"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Enviar
                    </button>
                  </form>
                </div>

                {/* Botones de pago */}
                <div className="bg-gray-200 p-4 rounded-lg shadow">
                  <p className="text-gray-600">
                    * MercadoPago no procesa pagos del exterior de Argentina.
                    <br />* Los cafecitos no desbloquean contenido de la galería.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                      MercadoPago
                    </button>
                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg">
                      Bitcoin
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                      Pagar con Cripto
                    </button>
                  </div>
                </div>

                {/* Sección de Comentarios */}
                <div className="bg-gray-200 p-4 rounded-lg shadow">
                  <h3 className="text-lg font-bold text-gray-800">Comentarios</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-gray-600 font-semibold">Juan Pérez</p>
                      <p className="text-gray-500">¡Me encanta tu contenido! Sigue así, siempre inspiras a otros. 😄</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-gray-600 font-semibold">Ana Gómez</p>
                      <p className="text-gray-500">Tus ideas son geniales, ¡te sigo desde hace meses! 👍</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-gray-600 font-semibold">Carlos Ruiz</p>
                      <p className="text-gray-500">¡Un placer apoyarte con un cafecito! ☕✨</p>
                    </div>
                  </div>
                  {/* Botón de cargar más */}
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => {/* Lógica para cargar más comentarios */ }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Cargar más comentarios
                    </button>
                  </div>
                </div>


              </div>
            </div>
          </main>
  );
};

export default Perfil;
