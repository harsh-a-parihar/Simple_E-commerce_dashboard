import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch("http://localhost:5001/products");
      if (result.ok) {
        let data = await result.json();
        setProducts(data);
      } else {
        console.error("Error fetching products", result.status);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5001/products/${id}`, {
      method: "Delete"
    });
    result = await result.json();
    if(result){
      getProducts();
      alert("Product deleted successfully.")
    }
  };
  

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Products</h2>
      <div style={styles.container}>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              style={styles.card}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={styles.imageContainer}>
                {product.imageurl ? (
                  <img
                    src={`http://localhost:5001/${product.imageurl}`} // Adjust the image path
                    alt={product.name}
                    style={styles.image}
                  />
                ) : (
                  <div style={styles.noImage}>No Image</div>
                )}
              </div>
              <div style={styles.details}>
                <h3 style={styles.name}>{product.name}</h3>
                <p style={styles.company}>{"Company: " + product.company}</p>
                <p style={styles.category}>{"Category: " + product.category}</p>
                <p style={styles.price}>
                  <span>Price: </span>${product.price}
                </p>
                <button onClick={()=> deleteProduct(product._id)} style={styles.button}>Delete</button>
                <button style={styles.cartButton}>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

// Inline styles for the page
const styles = {
  page: {
    // padding: '2rem',
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#333",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    border: "0.1px groove #333",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.5s ease-in-out",
    width: "300px", // Updated width to match layout
    // minWidth: '20%',
    textAlign: "center",
    cursor: "pointer",
  },
  imageContainer: {
    width: "100%",
    height: "180px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  noImage: {
    color: "#888",
    fontSize: "1rem",
  },
  details: {
    padding: "1rem",
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#333",
    display: "block",
    textAlign: "left",
  },
  company: {
    fontSize: "0.9rem",
    color: "#888",
    marginBottom: "0.3rem",
    display: "block",
    textAlign: "left",
  },
  category: {
    fontSize: "0.9rem",
    color: "#888",
    marginBottom: "0.3rem",
    display: "block",
    textAlign: "left",
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#e60000",
    marginBottom: "0.5rem",
    display: "block",
    textAlign: "left",
  },
  button: {
    width: "100%",
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "5px",
  },
  cartButton: {
    width: "100%",
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "5px",
  },
};

export default Products;
