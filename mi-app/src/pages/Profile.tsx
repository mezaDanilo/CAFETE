import { useState } from 'react';
import { FaFlag } from 'react-icons/fa'; // Icono de bandera para el reporte

const Profile = () => {
  const [activeTab, setActiveTab] = useState('perfil'); // Estado para la pestaña activa
  const [followed, setFollowed] = useState(false); // Estado para saber si el usuario está seguido
  const [reported, setReported] = useState(false); // Estado para saber si el reporte ha sido hecho
  const [paid, setPaid] = useState(false); // Estado para verificar si el usuario pagó
  const [comments, setComments] = useState<string[]>([]); // Lista de comentarios
  const [newComment, setNewComment] = useState(''); // Estado para un nuevo comentario
  const [coffeeGoal, setCoffeeGoal] = useState({ current: 500, goal: 1000 }); // Meta de cafecitos
  const [coffeeCount, setCoffeeCount] = useState(1); // Cantidad de cafecitos a comprar
  const isLoggedIn = true; // Cambiar según el estado de inicio de sesión

  const increaseCoffeeCount = (count: number) => {
    setCoffeeCount(count);
  };


  const renderTabContent = () => {
    switch (activeTab) {
      case 'perfil':
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
      case 'galeria':

        return (
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Galería</h3>

            {/* Pack de imágenes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Imagen individual con título */}
              <div className="relative group">
                <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Imagen 1"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm"
                  />
                </div>

                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    onClick={() => isLoggedIn ? alert('Desbloqueando contenido') : alert('Inicia sesión para desbloquear')}
                  >
                    {isLoggedIn ? 'Desbloquear contenido' : 'Inicia sesión'}
                  </button>
                </div>

                <h4 className="mt-2 text-center text-white">Título de la imagen</h4>
              </div>

              {/* Repite para más imágenes */}
            </div>

            {/* Botón para cargar más */}
            <div className="flex justify-center mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Cargar más imágenes
              </button>
            </div>
          </div>
        );

      case 'posts':
        return <div>Contenido de los Posts</div>;
      case 'planes':
        return <div>Contenido de los Planes</div>;
      default:
        return <div>Contenido no encontrado</div>;
    }
  };

  return (
    <main className="w-full min-h-screen px-4 py-8 bg-gray-100">
      <div className="w-full max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Banner */}
        <div className="relative mb-8">
          <img
            src="https://via.placeholder.com/1200x400?text=Banner"
            alt="Banner"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
            <h2 className="text-4xl font-bold text-white">Creador/a 1</h2>
          </div>
        </div>

        {/* Foto de perfil, descripción, y botones */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Creador/a 1</h3>
              <p className="text-sm text-gray-600">
                Descripción breve sobre el creador/a. Aquí puedes agregar más detalles.
              </p>
            </div>
          </div>

          {/* Botones de seguir y reportar */}
          <div className="flex space-x-4">
            <button
              onClick={() => setFollowed(!followed)}
              className={`px-4 py-2 rounded-lg ${followed ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
            >
              {followed ? 'Dejar de seguir' : 'Seguir'}
            </button>
            <button
              onClick={() => setReported(!reported)}
              className={`text-2xl ${reported ? 'text-red-600' : 'text-gray-600'} hover:text-red-600 transition`}
            >
              <FaFlag />
            </button>
          </div>
        </div>

        {/* Barra de navegación de las pestañas */}
        <div className="flex space-x-4 mb-8 justify-center w-full">
          <button
            onClick={() => setActiveTab('perfil')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'perfil' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
          >
            Perfil
          </button>
          <button
            onClick={() => setActiveTab('galeria')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'galeria' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
          >
            Galería
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'posts' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('planes')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'planes' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
          >
            Planes
          </button>
        </div>

        {/* Contenido de la pestaña activa */}
        <div>{renderTabContent()}</div>
      </div>
    </main>
  );
};

export default Profile;
