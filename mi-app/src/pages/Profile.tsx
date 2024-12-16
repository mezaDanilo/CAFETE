import { useState } from 'react';
import { FaFlag } from 'react-icons/fa'; // Icono de bandera para el reporte

const Profile = () => {
  const [activeTab, setActiveTab] = useState('perfil'); // Estado para la pestaña activa
  const [followed, setFollowed] = useState(false); // Estado para saber si el usuario está seguido
  const [reported, setReported] = useState(false); // Estado para saber si el reporte ha sido hecho

  const renderTabContent = () => {
    switch (activeTab) {
      case 'perfil':
        return <div>Contenido del Perfil</div>;
      case 'galeria':
        return <div>Contenido de la Galería</div>;
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
                Descripción breve sobre el creador o creadora. Aquí puedes agregar más detalles.
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
