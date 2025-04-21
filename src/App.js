import React from 'react';
import { Analytics } from '@vercel/analytics/react'; // ✅ Import Analytics

function App() {
  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
      <Analytics /> {/* ✅ Add Analytics here */}
    </div>
  );
}

// Navbar
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Fashionista</h2>
      <ul style={styles.navLinks}>
        <li>Home</li>
        <li>Trends</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>Stay Stylish with Fashionista</h1>
      <p style={styles.heroText}>Explore the latest trends in fashion and redefine your wardrobe.</p>
      <button style={styles.button}>Explore Now</button>
    </section>
  );
}

// Featured Products
function Featured() {
  return (
    <section style={styles.featured}>
      <h2 style={styles.sectionTitle}>Featured Styles</h2>
      <div style={styles.cardContainer}>
        <ProductCard 
          title="Casual Denim" 
          image="https://images.unsplash.com/photo-1542060748-10c28b62716c?auto=format&fit=crop&w=400&q=80" 
        />
        <ProductCard 
          title="Summer Dress" 
          image="https://images.unsplash.com/photo-1618354691211-d98aaef2c95c?auto=format&fit=crop&w=400&q=80" 
        />
        <ProductCard 
          title="Urban Jacket" 
          image="https://images.unsplash.com/photo-1612423284932-b55edb40ab58?auto=format&fit=crop&w=400&q=80" 
        />
      </div>
    </section>
  );
}

// Product Card
function ProductCard({ title, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.cardImage} />
      <h3>{title}</h3>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Fashionista. All rights reserved.</p>
    </footer>
  );
}

// Inline Styles
const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  },
  nav: {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
  },
  hero: {
    backgroundColor: '#f2f2f2',
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  heroText: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.8rem 2rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  featured: {
    padding: '3rem 2rem',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    width: '200px',
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '10px',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
  },
};

export default App;
