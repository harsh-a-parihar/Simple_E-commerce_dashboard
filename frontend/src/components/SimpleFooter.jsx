// src/SimpleFooter.jsx
import React from 'react';

const SimpleFooter = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Simple E-commerce Dashboard. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
};

export default SimpleFooter;
