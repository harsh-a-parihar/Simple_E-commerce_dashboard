import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = (event) => {
    localStorage.clear();
    event.preventDefault();
    navigate("/home");
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav style={styles.navbar}>
      {/* Logo and Company Name */}
      <div style={styles.logoContainer}>
        <img src="https://thumbs.dreamstime.com/z/vegetables-shopping-cart-trolley-grocery-logo-icon-design-vector-171090350.jpg" alt="Logo" style={styles.logo} />
        <h2 style={styles.title}><Link to="/products" style={styles.navLink}>Ashish Kirana</Link></h2>
      </div>

      <ul style={styles.navLinks}>
        {!auth ? (
          <>
            <li style={styles.navItem}>
              <Link to="/home" style={styles.navLink}>
                Home
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/about" style={styles.navLink}>
                About
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/blog" style={styles.navLink}>
                Blog
              </Link>
            </li>
          </>
        ) : (
          <>
            <li style={styles.navItem}>
              <Link to="/products" style={styles.navLink}>
                Products
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/orders" style={styles.navLink}>
                Orders
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/cart" style={styles.navLink}>
                Cart
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Right Section (Search, Signup/Login or Profile) */}
      <div style={styles.rightSection}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Type here to search.."
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {!auth ? (
          <>
            <Link to="/signup" style={styles.authButton}>
              Signup
            </Link>
            <Link to="/login" style={styles.authButton}>
              Login
            </Link>
          </>
        ) : (
          <div style={styles.profileSection}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VLNNe21fRCrEEMk1TF0i8BzrjxqDR5s6zL89sa28-ouSiB8aBVH2VuPqG_4sNNf_NUQ&usqp=CAU"
              alt="User"
              onClick={toggleDropdown}
              style={styles.profileIcon}
            />
            {dropdownOpen && (
              <div style={styles.dropdownMenu}>
              <a href="/profile" style={styles.dropdownItem}>Profile</a>
              <a href="/settings" style={styles.dropdownItem}>Settings</a>
              <a onClick={logout} href="/logout" style={styles.dropdownItem}>Logout</a>
            </div>
            )}
          </div>
        )}
      </div>
    </nav>  
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    position: "relative",
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
    borderRadius: '50%',
  },
  title: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "50px",  
    margin: 0,
    padding: 0,
    position: "absolute",  // Position the navLinks absolutely
    left: "50%",
    transform: "translateX(-50%)",  // Center them horizontally
  },
  navItem: {},
  navLink: {
    color: "#fff",
    textDecoration: "none",
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '2rem',
    backgroundColor: 'rgb(215 205 205)',
    padding: '4px 0.8rem',
    border: '1px solid #D3D3D3',
    transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    fontSize: '1rem',
    flex: 1, // makes the input take up remaining space
    padding: '5px',
  },
  searchButton: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    height: '1.85rem',
    width: '1.85rem',
  },
  authButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',  // Smooth transition for hover effects
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
    display: 'inline-block',  // Keep it inline for proper button look
  },
  authButtonHover: {
    backgroundColor: '#0056b3',  // Darker shade on hover
    transform: 'scale(1.05)',  // Scale up slightly on hover
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',  // Larger shadow on hover
  }, 
  profileSection: {
    position: 'relative',
  },
  profileIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  dropdownMenu: {
    position: 'absolute',
    right: 0,
    top: '50px',
    backgroundColor: 'rgb(99 91 91)',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    zIndex: 1000,
    width: '200px', // Adjust as per requirement
  },
  dropdownItem: {
    display: 'block',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#f1f1f1',
    border: '1px solid #D3D3D3',
    transition: 'background-color 0.3s ease, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  dropdownItemHover: {
    backgroundColor: '#f1f1f1',
  },
};

export default Nav;
