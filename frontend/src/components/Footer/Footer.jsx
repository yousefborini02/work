import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/privacy" className="hover:text-red-600">Privacy Policy</a>
        <a href="/terms" className="hover:text-red-600">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
