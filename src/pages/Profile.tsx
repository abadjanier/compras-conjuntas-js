import React, { useState } from 'react';
import { User, ShoppingBag } from 'lucide-react';

interface GroupPurchase {
  id: number;
  productName: string;
  price: number;
  groupSize: number;
  currentGroupSize: number;
  status: 'En progreso' | 'Completado' | 'Cancelado';
}

const Profile: React.FC = () => {
  const [user] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
  });

  const [groupPurchases] = useState<GroupPurchase[]>([
    {
      id: 1,
      productName: "Smart TV 4K 55\"",
      price: 499.99,
      groupSize: 10,
      currentGroupSize: 3,
      status: 'En progreso',
    },
    {
      id: 2,
      productName: "Cafetera Automática",
      price: 199.99,
      groupSize: 20,
      currentGroupSize: 20,
      status: 'Completado',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-stripe-dark">Perfil de Usuario</h1>
      
      <div className="card-stripe p-6 mb-8">
        <div className="flex items-center mb-4">
          <User size={48} className="text-stripe-purple mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-stripe-dark">{user.name}</h2>
            <p className="text-stripe-text">{user.email}</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 text-stripe-dark">Mis Compras Conjuntas</h2>
      <div className="space-y-4">
        {groupPurchases.map((purchase) => (
          <div key={purchase.id} className="card-stripe p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-stripe-dark">{purchase.productName}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                purchase.status === 'En progreso' ? 'bg-yellow-100 text-yellow-800' :
                purchase.status === 'Completado' ? 'bg-green-100 text-green-800' :
                'bg-red-100 text-red-800'
              }`}>
                {purchase.status}
              </span>
            </div>
            <p className="text-stripe-text mb-2">Precio: ${purchase.price.toFixed(2)}</p>
            <div className="flex items-center text-sm text-stripe-text">
              <ShoppingBag size={16} className="mr-1" />
              {purchase.currentGroupSize}/{purchase.groupSize} participantes
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;