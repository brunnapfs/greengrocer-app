import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Simulação de dados de produtos
  useEffect(() => {
    const simulatedProducts = [
      { id: 1, title: 'Maçãs Orgânicas', description: 'Maçãs frescas colhidas localmente.', price: 2.5, image: 'https://images.tcdn.com.br/img/img_prod/450860/muda_de_maca_gala_climas_frios_ou_amenos_1m_enxertadas_566_1_20190611093558.jpg' },
      { id: 2, title: 'Tomates Heirloom', description: 'Tomates orgânicos de variedades tradicionais.', price: 3.0, image: 'https://nutricaodesafras.com.br/wp-content/uploads/2022/07/pe_de_tomate_artigo.jpg' },
      { id: 3, title: 'Cenouras', description: 'Cenouras orgânicas e crocantes.', price: 1.75, image: 'https://revistacampoenegocios.com.br/wp-content/uploads/2021/11/Cenoura-1.jpg' },
      { id: 4, title: 'Alface Crespa', description: 'Alface fresca e crocante, ideal para saladas.', price: 2.0, image: 'https://pfarma.com.br/images/noticias/alface.jpg' },
      { id: 5, title: 'Morangos Frescos', description: 'Morangos vermelhos e suculentos.', price: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz2fbqMSgGMEGsAKY4J2LNF_J0nckmM9_3Q&s' }
    ];

    setProducts(simulatedProducts);
  }, []);

  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const newItem = { ...product, quantity };
      setCart([...cart, newItem]);
    }

    console.log(`Produto ${product.title} (${quantity}x) adicionado ao carrinho.`);
  };

  return (
    <div className="products-container">
      <h2>Catálogo de Produtos</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Link to="/cart" className="nav-link">
        <button type="button">Ver Carrinho</button>
      </Link>
    </div>
  );
};

export default Products;
