import React, { useState } from 'react';
import { ShoppingBag, Users } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  groupSize: number;
  currentGroupSize: number;
}

const Products: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Smart TV 4K 55\"",
      description: "Televisor LED 4K Ultra HD con HDR y Smart TV",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      groupSize: 10,
      currentGroupSize: 3,
    },
    {
      id: 2,
      name: "Aspiradora Robot",
      description: "Aspiradora robot inteligente con mapeo y control por app",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      groupSize: 15,
      currentGroupSize: 7,
    },
    {
      id: 3,
      name: "Cafetera Automática",
      description: "Cafetera automática con molinillo integrado y 15 bares de presión",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      groupSize: 20,
      currentGroupSize: 12,
    },
  ]);

  const handleJoinGroup = (productId: number) => {
    console.log(`Unido al grupo de compra del producto ${productId}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-stripe-dark">Productos Disponibles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="card-stripe">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-stripe-dark">{product.name}</h2>
              <p className="text-stripe-text mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-stripe-dark">${product.price.toFixed(2)}</span>
                <div className="flex items-center text-sm text-stripe-text">
                  <Users size={16} className="mr-1" />
                  {product.currentGroupSize}/{product.groupSize}
                </div>
              </div>
              <button
                onClick={() => handleJoinGroup(product.id)}
                className="btn-stripe w-full flex items-center justify-center"
              >
                <ShoppingBag size={18} className="mr-2" />
                Unirse al Grupo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;