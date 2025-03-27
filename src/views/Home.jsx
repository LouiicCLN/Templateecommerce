
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Bienvenue sur le site</h1>
      <p className="text-center text-gray-700">
        Ceci est une page d'exemple créée avec React.js et Tailwind CSS.
      </p>
      <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Section Test</h2>
        <p className="text-gray-600">
          Voici une section avec du contenu fictif pour tester l'affichage et les styles de base.
        </p>
      </div>
    </div>
  );
};

export default Home;
