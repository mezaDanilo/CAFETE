import React from 'react';

const Posts = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Publicaciones</h3>
      {/* Lista de publicaciones */}
      <div className="space-y-6">
        {/* Publicación 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Autor"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800">Título de la Publicación 1</h4>
              <p className="text-sm text-gray-600">
                Descripción breve de la publicación. Aquí puedes agregar un resumen o introducción al contenido.
              </p>
              <div className="mt-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  Leer más
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Publicación 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Autor"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-800">Título de la Publicación 2</h4>
              <p className="text-sm text-gray-600">
                Descripción breve de la publicación. Aquí puedes agregar un resumen o introducción al contenido.
              </p>
              <div className="mt-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  Leer más
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Agregar más publicaciones según sea necesario */}
      </div>
      {/* Botón de cargar más */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => {/* Lógica para cargar más publicaciones */}}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Cargar más publicaciones
        </button>
      </div>
    </div>
  );
};

export default Posts;
