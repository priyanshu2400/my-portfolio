import React from 'react';

const PortfolioItem = ({ imageSrc, title }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
    <img src={imageSrc} alt={title} className="h-64 w-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
  </div>
);

export default PortfolioItem;
