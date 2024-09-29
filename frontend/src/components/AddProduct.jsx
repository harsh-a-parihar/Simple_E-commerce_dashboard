// src/AddProduct.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    quality: "",
    company: "",
    imageurl: null,
  });

  const [loading, setLoadng] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, imageurl: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadng(true);

    if (
      !product.name ||
      !product.price ||
      !product.category ||
      !product.company ||
      !product.quality ||
      !product.imageurl
    ) {
      setError(true);
      return false;
    }

    try {
      console.warn(product);
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      // const productWithUser = { ...product, userId };

      let result = await fetch("http://localhost:5001/add", {
        method: "POST",
        body: JSON.stringify({
          name: product.name,
          price: product.price,
          category: product.category,
          quality: product.quality,
          company: product.company,
          imageurl: product.imageurl,
          userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.warn(result);

      if (result.status === 201) {
        alert("Product added successfully!");
        navigate("/add");
      }
    } catch (err) {
      setError("Failed to add product. Please try again.");
    } finally {
      setLoadng(false);
    }
  };

  return (
    <div style={styles.formContainer}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Add New Product</h2>

        <label style={styles.label}>Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          style={styles.input}
        />
        {error && !product.name && (
          <span
            style={{
              color: "red",
              marginTop: "-20px",
              marginBottom: "15px",
              display: "block",
              fontSize: "0.8rem",
              textAlign: "left",
            }}
          >
            *Enter valid product name.
          </span>
        )}

        <label style={styles.label}>Price</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          style={styles.input}
        />
        {error && !product.price && (
          <span
            style={{
              color: "red",
              marginTop: "-20px",
              marginBottom: "15px",
              display: "block",
              fontSize: "0.8rem",
              textAlign: "left",
            }}
          >
            *Enter valid product price.
          </span>
        )}

        <label style={styles.label}>Category</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          style={styles.input}
        />
        {error && !product.category && (
          <span
            style={{
              color: "red",
              marginTop: "-20px",
              marginBottom: "15px",
              display: "block",
              fontSize: "0.8rem",
              textAlign: "left",
            }}
          >
            *Enter valid product category.
          </span>
        )}

        <label style={styles.label}>Quality</label>
        <input
          type="text"
          name="quality"
          value={product.quality}
          onChange={handleChange}
          style={styles.input}
        />
        {error && !product.quality && (
          <span
            style={{
              color: "red",
              marginTop: "-20px",
              marginBottom: "15px",
              display: "block",
              fontSize: "0.8rem",
              textAlign: "left",
            }}
          >
            *Enter valid product quality.
          </span>
        )}

        <label style={styles.label}>Company</label>
        <input
          type="text"
          name="company"
          value={product.company}
          onChange={handleChange}
          style={styles.input}
        />
        {error && !product.company && (
          <span
            style={{
              color: "red",
              marginTop: "-20px",
              marginBottom: "15px",
              display: "block",
              fontSize: "0.8rem",
              textAlign: "left",
            }}
          >
            *Enter valid product company.
          </span>
        )}

        <label style={styles.label}>Upload Product Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          style={styles.fileInput}
        />
        {error && !product.imageurl && (
          <span
            style={{
              color: "red",
              marginTop: "-20px",
              marginBottom: "20px",
              display: "block",
              fontSize: "0.8rem",
              textAlign: "left",
            }}
          >
            *Enter valid product image.
          </span>
        )}

        <button type="submit" disabled={loading} style={styles.submitButton}>
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#f1f1f1",
  },
  form: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "95%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  fileInput: {
    marginBottom: "20px",
    display: "block",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Add;
