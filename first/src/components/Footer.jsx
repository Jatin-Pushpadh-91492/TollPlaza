import React from 'react';

const Footer = ({ className }) => {
  return (
    <footer className={`w-full bg-black text-white py-2 ${className}`}>
      <div className="container mx-auto text-center">
        &copy; MahakalInfra Esolution PVT LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;