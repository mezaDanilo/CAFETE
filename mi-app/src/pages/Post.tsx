import React from 'react';

interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  avatar: string;
  image: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Título de la Publicación 1',
    description: 'Descripción breve de la publicación. Aquí puedes agregar un resumen o introducción al contenido.',
    author: 'Autor 1',
    avatar: 'https://via.placeholder.com/150',
    image: 'https://via.placeholder.com/300x300',
    content: 'Contenido completo de la publicación 1...',
  },
  {
    id: 2,
    title: 'Título de la Publicación 2',
    description: 'Descripción breve de la publicación. Aquí puedes agregar un resumen o introducción al contenido.',
    author: 'Autor 2',
    avatar: 'https://via.placeholder.com/150',
    image: 'https://via.placeholder.com/300x300',
    content: 'Contenido completo de la publicación 2...',
  },
  // Agregar más publicaciones según sea necesario
];

const Posts = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Publicaciones</h3>
      {/* Lista de publicaciones */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{post.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
                <div className="mt-4">
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                    onClick={() => alert(post.content)} // Simula "Leer más"
                  >
                    Leer más
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <img
                src={post.image}
                alt="Post image"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botón de cargar más */}
      <div className="flex justify-center mt-6">
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
