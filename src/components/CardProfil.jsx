import { Link } from 'react-router-dom';

const CardProfil = ({ babysitter }) => {
  // Formatter le tarif avec 2 décimales
  const formatTarif = (tarif) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(tarif);
  };
  
  // Gérer l'affichage des disponibilités
  const renderDisponibilites = () => {
    // Prendre les 3 premiers jours disponibles pour l'affichage
    const jours = Object.keys(babysitter.disponibilites)
      .filter(jour => babysitter.disponibilites[jour].length > 0)
      .slice(0, 3);
      
    if (jours.length === 0) {
      return <span className="text-gray-500">Aucune disponibilité</span>;
    }
    
    return (
      <div className="flex flex-wrap gap-1">
        {jours.map(jour => (
          <span key={jour} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">
            {jour}
          </span>
        ))}
        {Object.keys(babysitter.disponibilites).filter(jour => babysitter.disponibilites[jour].length > 0).length > 3 && (
          <span className="text-gray-500 text-xs">+</span>
        )}
      </div>
    );
  };
  
  return (
    <div className="card">
      <div className="relative pb-2/3">
        <img 
          src={babysitter.photo || "/api/placeholder/300/200"} 
          alt={`${babysitter.prenom} ${babysitter.nom}`}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-gray-800">{babysitter.prenom} {babysitter.nom}</h3>
          <span className="text-blue-600 font-bold">{formatTarif(babysitter.tarifHoraire)}/h</span>
        </div>
        
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {babysitter.localisation}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {babysitter.bio}
        </p>
        
        <div className="mb-4">
          <h4 className="text-xs font-medium text-gray-500 mb-1">Disponibilités</h4>
          {renderDisponibilites()}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < babysitter.note ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-600">({babysitter.avis})</span>
          </div>
          
          <Link to={`/profile/${babysitter.id}`} className="btn btn-primary text-sm">
            Voir profil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProfil;