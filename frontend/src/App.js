import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🛍️ Our Products</h1>

      {loading && <p style={styles.loading}>Loading products...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <div style={styles.info}>
              <h2 style={styles.title}>{product.name}</h2>
              <p style={styles.price}>₹ {product.price}</p>
              <p style={styles.qty}>
                <span style={product.qty > 5 ? styles.inStock : styles.lowStock}>
                  {product.qty > 5 ? "In Stock" : "Limited Stock"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", fontFamily: "Arial", padding: "20px", backgroundColor: "#f5f5f5" },
  heading: { color: "#333", fontSize: "28px", marginBottom: "20px" },
  loading: { fontSize: "18px", color: "#555" },
  error: { color: "red", fontSize: "18px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
    padding: "10px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  cardHover: { transform: "scale(1.05)" },
  image: { width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" },
  info: { padding: "10px" },
  title: { fontSize: "18px", color: "#333", marginBottom: "8px" },
  price: { fontSize: "16px", fontWeight: "bold", color: "#27ae60", marginBottom: "5px" },
  qty: { fontSize: "14px", color: "#777" },
  inStock: { color: "green", fontWeight: "bold" },
  lowStock: { color: "red", fontWeight: "bold" },
};

export default App;

