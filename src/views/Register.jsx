import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    acceptConditions: false
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Réinitialiser l'erreur lors de la saisie
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validation nom
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    
    // Validation prénom
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }
    
    // Validation email
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    // Validation mot de passe
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }
    
    // Validation confirmation mot de passe
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    // Validation rôle
    if (!formData.role) {
      newErrors.role = 'Veuillez sélectionner un rôle';
    }
    
    // Validation conditions
    if (!formData.acceptConditions) {
      newErrors.acceptConditions = 'Vous devez accepter les conditions d\'utilisation';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Formulaire soumis avec succès:', formData);
      
      // Simuler une inscription réussie et rediriger vers le tableau de bord approprié
      setTimeout(() => {
        const redirectPath = formData.role === 'parent' ? '/dashboard-parent' : '/dashboard-babysitter';
        navigate(redirectPath);
      }, 1000);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Créer un compte</h1>
          <p className="mt-2 text-gray-600">
            Rejoignez notre communauté et trouvez le babysitter idéal ou proposez vos services
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prénom */}
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  className={`mt-1 input ${errors.prenom ? 'border-red-500 focus:ring-red-500' : ''}`}
                  value={formData.prenom}
                  onChange={handleChange}
                />
                {errors.prenom && <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>}
              </div>
              
              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className={`mt-1 input ${errors.nom ? 'border-red-500 focus:ring-red-500' : ''}`}
                  value={formData.nom}
                  onChange={handleChange}
                />
                {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
              </div>
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`mt-1 input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`mt-1 input ${errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Confirmation mot de passe */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`mt-1 input ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            {/* Rôle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rôle</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="parent"
                    checked={formData.role === 'parent'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Parent
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="babysitter"
                    checked={formData.role === 'babysitter'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Babysitter
                </label>
              </div>
              {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
            </div>

            {/* Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="acceptConditions"
                checked={formData.acceptConditions}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="acceptConditions" className="text-sm text-gray-700">
                J'accepte les <Link to="#" className="text-blue-600 underline">conditions d'utilisation</Link>
              </label>
            </div>
            {errors.acceptConditions && <p className="text-sm text-red-600">{errors.acceptConditions}</p>}

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Créer mon compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
