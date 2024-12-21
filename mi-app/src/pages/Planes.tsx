import React, { useState } from 'react';

interface Plan {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  price: string;
}

const plans: Plan[] = [
  {
    id: 1,
    title: 'Plan Básico',
    description: 'Accede a contenido exclusivo por un mes.',
    benefits: ['Contenido exclusivo', 'Acceso anticipado'],
    price: 'ARS $8.000,00',
  },
  {
    id: 2,
    title: 'Plan Premium',
    description: 'Disfruta de contenido exclusivo y beneficios adicionales.',
    benefits: ['Contenido exclusivo', 'Acceso anticipado', 'Descuentos especiales'],
    price: 'ARS $9.300,00',
  },
  // Agrega más planes según sea necesario
];

const Plans = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Planes</h3>
      <div className="flex flex-col space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          >
            <h4 className="text-xl font-semibold text-gray-800 text-center">{plan.title}</h4>
            <p className="text-gray-600 mt-2 text-center">{plan.description}</p>
            <ul className="text-gray-600 mt-2 text-center">
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-gray-800 mt-4 text-center">{plan.price}</p>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Comprar Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
