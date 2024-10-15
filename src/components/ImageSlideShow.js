import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageSlideShow = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleClose = (e) => {
    if (e.target.id === 'modal-background') {
      onClose();
    }
  };
  
  return (
    <div id="modal-background" className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleClose}>
      <div className="relative w-full max-w-4xl p-4" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-1 right-1 text-white hover:text-gray-300"
        >
          <X size={30} />
        </button>
        <div className="relative m-5">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].description} 
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          <button 
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft size={36} />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight size={36} />
          </button>
        </div>
        <p className="mt-4 text-white text-center">
          {images[currentIndex].description}
        </p>
        <div className="mt-4 flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlideShow;