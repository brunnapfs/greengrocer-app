import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import '../styles/Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const simulatedProducts = [
      { id: 1, title: 'Maçãs Orgânicas', description: 'Maçãs frescas colhidas localmente.', price: 2.5, image: 'https://s2-g1.glbimg.com/Y-PCCBdwMhkvvdYqXBOiL0lIIpo=/0x0:620x410/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/O/8/h6SKqPQgi9xNf0SspITQ/maca.jpg' },
      { id: 2, title: 'Tomates Heirloom', description: 'Tomates orgânicos de variedades tradicionais.', price: 3.0, image: 'https://nutricaodesafras.com.br/wp-content/uploads/2022/07/pe_de_tomate_artigo.jpg' },
      { id: 3, title: 'Cenouras', description: 'Cenouras orgânicas e crocantes.', price: 1.75, image: 'https://revistacampoenegocios.com.br/wp-content/uploads/2021/11/Cenoura-1.jpg' },
      { id: 4, title: 'Alface Crespa', description: 'Alface fresca e crocante, ideal para saladas.', price: 2.0, image: 'https://pfarma.com.br/images/noticias/alface.jpg' },
      { id: 5, title: 'Morangos Frescos', description: 'Morangos vermelhos e suculentos.', price: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz2fbqMSgGMEGsAKY4J2LNF_J0nckmM9_3Q&s' },
      { id: 6, title: 'Pêssegos', description: 'Pêssegos frescos e suculentos.', price: 3.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQak4rnQokuPS_KQjOUflUdTSiUbOL8iLgBVA&s' },
      { id: 7, title: 'Bananas Orgânicas', description: 'Bananas cultivadas sem produtos químicos.', price: 2.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4waDjwv0nVembekB7vz0h75TxVIMplwlVPA&s' },
      { id: 8, title: 'Mel Orgânico', description: 'Mel orgânico: puro, saudável e nutritivo.', price: 15.00, image: 'https://cdn.awsli.com.br/300x300/1247/1247854/produto/51043047/4ae5d4be94.jpg' },
      { id: 9, title: 'Cestas de Verduras Frescas', description: '', price: 15.00, image: 'https://organicosinbox.com.br/wp-content/uploads/2020/03/pequena.jpg' },
      { id: 10, title: 'Mamão', description: 'Mamão com um frescor tropical em cada mordida.', price: 2.99, image: 'https://abeso.org.br/wp-content/uploads/2021/08/image4-450x370.jpg.webp' },
      { id: 11, title: 'Pêra', description: 'Pêra com um sabor suave e textura refrescante.', price: 1.50, image: 'https://lh5.googleusercontent.com/proxy/Q704_v0RtHRmf4Z_DI4Uxe5ryxAEMQBJFrln0eB-VMdlbXvljh8LApFK9X4QrgmmMCMnxru6w4ok3KAZYzFbuSBi-ODd07ZWGj3f9JJjyk5XkacjbqRPvKzuJfjn9wZAFKkb6qhRgxvq' },
      { id: 12, title: 'Melancia', description: 'Melancias suculentas e doces.', price: 6.00, image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/05/melancia_01.jpg' },
    ];

    setProducts(simulatedProducts);
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="products-container">
      <div className="header">
        <h2>Catálogo de Produtos</h2>
        <div className="search-bar">
          <div>
          🔍
          </div>
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Link to="/cart" className="nav-link">
        <button type="button" className='btnCart'>Ver Carrinho</button>
      </Link>
    </div>
  );
};

export default Products;