import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShoppingBag, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center text-stripe-purple">
          <Users className="mr-2" />
          ComprasJuntas
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-stripe-text hover:text-stripe-purple">Inicio</Link>
            </li>
            <li>
              <Link to="/products" className="text-stripe-text hover:text-stripe-purple flex items-center">
                <ShoppingBag className="mr-1" size={18} />
                Productos
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-stripe-text hover:text-stripe-purple flex items-center">
                <User className="mr-1" size={18} />
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;