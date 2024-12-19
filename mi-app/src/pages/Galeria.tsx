// Mueve estas líneas al principio del archivo
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      id: 1,
      title: 'Plan Básico',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Plan Premium',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Playa',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Noche',
      image: 'https://via.placeholder.com/300',
    },
    // Agrega más planes según sea necesario
  ];

  const images = [
    {
      id: 1,
      title: 'Imagen 1',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Imagen 2',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Imagen 3',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Imagen 4',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      title: 'Imagen 5',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      title: 'Imagen 6',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 7,
      title: 'Imagen 7',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 8,
      title: 'Imagen 8',
      image: 'https://via.placeholder.com/300',
    },
    // Agrega más imágenes según sea necesario
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    infinite: true, // Hace que el carrusel sea infinito
    speed: 500,     // Velocidad de la transición
    slidesToShow: 4, // Número de elementos que se mostrarán en la vista
    slidesToScroll: 1, // Número de elementos a desplazar con cada clic
    responsive: [
      {
        breakpoint: 1024, // Para pantallas medianas (tabletas)
        settings: {
          slidesToShow: 2, // Muestra 2 elementos
        },
      },
      {
        breakpoint: 768, // Para pantallas pequeñas (móviles)
        settings: {
          slidesToShow: 1, // Muestra 1 elemento en pantallas pequeñas
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Galería</h3>

      <Slider {...settings}>
  {plans.map((plan) => (
    <div key={plan.id} className="p-1">
      <div
        className="bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold"
        style={{
          backgroundImage: `url(${plan.image})`,
          height: '15vh', // Establece una altura fija
        }}
      >
        {plan.title}
      </div>
    </div>
  ))}
</Slider>




      {/* Galería de Imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
  {images.map((img) => (
    <div key={img.id} className="relative group">
      <img
        src={img.image}
        alt={img.title}
        className="w-full object-cover rounded-lg shadow-lg filter blur-sm"
        style={{ height: '30vh', width: '50%' }}  // Ajusta la altura aquí
      />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <img
          src="https://cdn.cafecito.app/imgs/cafecito-lock.svg"
          alt="Lock Icon"
          className="mb-2"
          style={{ height: '20vh', width: '20%', zIndex: 10 }}
        />
          <span className="text-black text-lg" style={{ zIndex: 10 }}>Desbloquear contenido</span>
        </div>
      <button
        onClick={openModal}
        className="absolute inset-0 w-full h-full"
      ></button>
    </div>
  ))}
</div>


      {/* Modal de Inicio de Sesión */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
          {/* Formulario de inicio de sesión */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
