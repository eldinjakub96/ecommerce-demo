import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to Our E-Commerce Store</h1>
            <p>Discover the latest trends and deals on your favorite products.</p>
          </div>
        </section>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products">
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p>Error loading products: {error}</p>
            ) : products.length > 0 ? (
              products.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
