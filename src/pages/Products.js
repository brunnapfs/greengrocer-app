import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import '../styles/Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const simulatedProducts = [
      { id: 1, title: 'Maçãs Orgânicas', description: 'Maçãs frescas colhidas localmente.', price: 2.5, image: 'https://s2-g1.glbimg.com/Y-PCCBdwMhkvvdYqXBOiL0lIIpo=/0x0:620x410/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/O/8/h6SKqPQgi9xNf0SspITQ/maca.jpg' },
      { id: 2, title: 'Tomates Heirloom', description: 'Tomates orgânicos de variedades tradicionais.', price: 3.0, image: 'https://nutricaodesafras.com.br/wp-content/uploads/2022/07/pe_de_tomate_artigo.jpg' },
      { id: 3, title: 'Cenouras', description: 'Cenouras orgânicas e crocantes.', price: 1.75, image: 'https://revistacampoenegocios.com.br/wp-content/uploads/2021/11/Cenoura-1.jpg' },
      { id: 4, title: 'Alface Crespa', description: 'Alface fresca e crocante, ideal para saladas.', price: 2.0, image: 'https://pfarma.com.br/images/noticias/alface.jpg' },
      { id: 5, title: 'Morangos Frescos', description: 'Morangos vermelhos e suculentos.', price: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz2fbqMSgGMEGsAKY4J2LNF_J0nckmM9_3Q&s' },
      { id: 6, title: 'Pêssegos', description: 'Pêssegos frescos e suculentos.', price: 3.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQak4rnQokuPS_KQjOUflUdTSiUbOL8iLgBVA&s' }
    ];

    setProducts(simulatedProducts);
  }, []);

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
