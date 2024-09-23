// src/MainFooter.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>Get to Know Us</h4>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Careers</Link></li>
            <li><Link to="/" style={styles.link}>Blog</Link></li>
            <li><Link to="/" style={styles.link}>About Us</Link></li>
            <li><Link to="/" style={styles.link}>Investor Relations</Link></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Make Money with Us</h4>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Sell on Our Platform</Link></li>
            <li><Link to="/" style={styles.link}>Become an Affiliate</Link></li>
            <li><Link to="/" style={styles.link}>Advertise Your Products</Link></li>
            <li><Link to="/" style={styles.link}>Self-Publish</Link></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Our Payment Options</h4>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Business Card</Link></li>
            <li><Link to="/" style={styles.link}>Shop with Points</Link></li>
            <li><Link to="/" style={styles.link}>Reload Your Balance</Link></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Let Us Help You</h4>
          <ul style={styles.linkList}>
            <li><Link to="/" style={styles.link}>Your Profile</Link></li>
            <li><Link to="/" style={styles.link}>Your Orders</Link></li>
            <li><Link to="/" style={styles.link}>Shipping Rates & Policies</Link></li>
            <li><Link to="/" style={styles.link}>Returns & Replacements</Link></li>
          </ul>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Simple E-commerce Dashboard. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#232F3E',
    color: '#FFFFFF',
    padding: '40px 20px',
    marginBottom: '30px', // Pushes the footer to the bottom of the flex container
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '24px',
  },
  copyright: {
    borderTop: '1px solid #3A4553',
    paddingTop: '10px',
    textAlign: 'center',
    fontSize: '14px',
  },
};

export default MainFooter;
