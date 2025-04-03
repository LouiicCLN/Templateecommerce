import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 w-full">
      {/* Hero */}
      <section className="bg-blue-100 py-16">
        <div className=" container-custom">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Trouvez le babysitter parfait pour vos enfants
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                BabySitConnect met en relation les parents avec des babysitters de confiance, 
                disponibles selon vos besoins et dans votre quartier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary text-center py-3 px-6">
                  Je suis un parent
                </button>
                <button to="/register" className="btn btn-secondary text-center py-3 px-6">
                  Je suis babysitter
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/api/placeholder/500/400" 
                alt="Babysitter avec des enfants" 
                className="rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Étape 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Créez votre profil</h3>
              <p className="text-gray-600">
                Inscrivez-vous en tant que parent ou babysitter et complétez votre profil avec vos informations.
              </p>
            </div>
            
            {/* Étape 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Trouvez la personne idéale</h3>
              <p className="text-gray-600">
                Les parents recherchent des babysitters selon leurs critères et les babysitters affichent leurs disponibilités.
              </p>
            </div>
            
            {/* Étape 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Communiquez et réservez</h3>
              <p className="text-gray-600">
                Échangez avec les babysitters ou les parents, fixez un rendez-vous et profitez du service.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Témoignages */}
            <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Ils nous font confiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="/api/placeholder/64/64" 
                  alt="Utilisateur" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sophie Martin</h4>
                  <span className="text-gray-600 text-sm">Parent de 2 enfants</span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Grâce à BabySitConnect, nous avons trouvé une babysitter géniale pour nos jumeaux. 
                Le processus était simple et nous avons pu consulter les avis des autres parents avant de la contacter."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Témoignage 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="/api/placeholder/64/64" 
                  alt="Utilisateur" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Lucas Dubois</h4>
                  <span className="text-gray-600 text-sm">Babysitter</span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Je suis étudiant et BabySitConnect m'a permis de trouver des familles 
                qui correspondaient à mes disponibilités. L'interface est intuitive et 
                les contacts sont faciles à établir."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Témoignage 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="/api/placeholder/64/64" 
                  alt="Utilisateur" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Émilie Blanc</h4>
                  <span className="text-gray-600 text-sm">Parent d'un enfant</span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "En tant que maman solo, il est parfois difficile de trouver une personne 
                de confiance rapidement. BabySitConnect m'a sauvée à plusieurs reprises 
                avec son large choix de profils vérifiés."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à trouver votre babysitter idéal ?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous dès maintenant et commencez à rechercher des babysitters 
            qualifiés dans votre quartier, ou proposez vos services aux familles.
          </p>
          <button className="btn bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8">
            S'inscrire gratuitement
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
