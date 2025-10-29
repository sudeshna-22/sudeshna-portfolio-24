import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span> &copy; {currentYear} | Sudeshna Pandey・All rights reserved</span>
    </footer>
  );
};

export default Footer;
