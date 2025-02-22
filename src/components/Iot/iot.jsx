import React from 'react';

const ItemDisplay = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-4">Item Title</h2>
      
      <img 
        src="https://via.placeholder.com/300" 
        alt="Item" 
        className="mb-4 rounded-lg shadow-md transition-transform transform hover:scale-110"
      />
      
      <video 
        controls 
        className="mb-4 rounded-lg shadow-md transition-transform transform hover:scale-110"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <p className="text-center">
        This is a description of the item. It provides additional information and context about the item displayed above.
      </p>
    </div>
  );
};

export default ItemDisplay;