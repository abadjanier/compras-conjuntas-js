import React from 'react';
import { Users, TrendingUp, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-stripe-dark">Compras conjuntas simplificadas</h1>
        <p className="text-xl mb-8 text-stripe-text">
          Une fuerzas, ahorra en grande y accede a ofertas exclusivas
        </p>
        <Link to="/products" className="btn-stripe text-lg px-8 py-3">
          Comenzar ahora
        </Link>
      </div>
      
      <div className="mb-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-stripe-purple to-blue-500 shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative bg-white shadow-lg sm:rounded-3xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="w-12 h-12 text-stripe-purple mb-4" />}
                title="Compra en Grupo"
                description="Únete a otros compradores para acceder a descuentos por volumen en tus productos favoritos."
              />
              <FeatureCard
                icon={<TrendingUp className="w-12 h-12 text-stripe-purple mb-4" />}
                title="Ahorra Más"
                description="Aprovecha el poder de la compra colectiva para obtener mejores precios en productos de calidad."
              />
              <FeatureCard
                icon={<Percent className="w-12 h-12 text-stripe-purple mb-4" />}
                title="Ofertas Exclusivas"
                description="Accede a ofertas y descuentos especiales disponibles solo para grupos de compra."
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-stripe-dark">Cómo Funciona</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-stripe p-6">
            <h3 className="text-xl font-semibold mb-4 text-stripe-dark">Para Compradores</h3>
            <ol className="list-decimal pl-6 space-y-2 text-stripe-text">
              <li>Explora productos disponibles para compras conjuntas.</li>
              <li>Únete a un grupo existente o inicia uno nuevo.</li>
              <li>Invita amigos o espera a que se complete el grupo.</li>
              <li>Realiza el pago cuando se alcance el objetivo.</li>
              <li>Recibe tu producto y disfruta del ahorro.</li>
            </ol>
          </div>
          <div className="card-stripe p-6">
            <h3 className="text-xl font-semibold mb-4 text-stripe-dark">Para Vendedores</h3>
            <ol className="list-decimal pl-6 space-y-2 text-stripe-text">
              <li>Registra tu tienda en nuestra plataforma.</li>
              <li>Crea ofertas especiales para grupos de compra.</li>
              <li>Establece mínimos de participantes y descuentos.</li>
              <li>Recibe pedidos consolidados.</li>
              <li>Aumenta tus ventas y fideliza clientes.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center">
    {icon}
    <h2 className="text-xl font-semibold mb-2 text-stripe-dark">{title}</h2>
    <p className="text-stripe-text">{description}</p>
  </div>
);

export default Home;