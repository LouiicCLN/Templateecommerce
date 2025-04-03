import { useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Simuler un état d'authentification (à remplacer par un vrai système d'auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('parent'); // 'parent' ou 'babysitter'
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              <path d="M10 6a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 11V7a1 1 0 011-1z" />
            </svg>
            <span className="text-xl font-bold text-blue-500">BabySitConnect</span>
          </Link>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className={`px-3 py-2 ${location.pathname === '/' ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-blue-500'}`}>
              Accueil
            </Link>
            {isLoggedIn ? (
              <>
                <Link 
                  to={userRole === 'parent' ? '/dashboard-parent' : '/dashboard-babysitter'} 
                  className={`px-3 py-2 ${
                    location.pathname === '/dashboard-parent' || location.pathname === '/dashboard-babysitter' 
                      ? 'text-blue-500 font-medium' 
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  Tableau de bord
                </Link>
                <button 
                  onClick={() => setIsLoggedIn(false)} 
                  className="px-3 py-2 text-gray-600 hover:text-blue-500"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={`px-3 py-2 ${location.pathname === '/login' ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  Connexion
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-primary"
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
          
          {/* Hamburger menu pour mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500'}`}
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            {isLoggedIn ? (
              <>
                <Link 
                  to={userRole === 'parent' ? '/dashboard-parent' : '/dashboard-babysitter'} 
                  className={`block px-3 py-2 rounded-md ${
                    location.pathname === '/dashboard-parent' || location.pathname === '/dashboard-babysitter' 
                      ? 'bg-blue-50 text-blue-500' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500'
                  }`}
                  onClick={toggleMenu}
                >
                  Tableau de bord
                </Link>
                <button 
                  onClick={() => {
                    setIsLoggedIn(false);
                    toggleMenu();
                  }} 
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-500"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={`block px-3 py-2 rounded-md ${location.pathname === '/login' ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500'}`}
                  onClick={toggleMenu}
                >
                  Connexion
                </Link>
                <Link 
                  to="/register" 
                  className="block px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                  onClick={toggleMenu}
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;