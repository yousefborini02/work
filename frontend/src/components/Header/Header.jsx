import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-red-600">Home</a></li>
          <li><a href="/about" className="hover:text-red-600">About</a></li>
          <li><a href="/services" className="hover:text-red-600">Services</a></li>
          <li><a href="/contact" className="hover:text-red-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
