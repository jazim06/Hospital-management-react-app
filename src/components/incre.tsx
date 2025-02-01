import { ArrowLeft, Bell } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IncrementDecrement = () => {
  // Initialize state for the value
  const [value, setValue] = useState(0);

  // Initialize navigate
  const navigate = useNavigate();

  // Function to increment the value
  const increment = () => {
    setValue(prevValue => {
      console.log("Incremented Value:", prevValue + 1);
      return prevValue + 1;
    });
  };
  
  const decrement = () => {
    setValue(prevValue => {
      console.log("Decremented Value:", prevValue - 1);
      return prevValue - 1;
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Oxygen Control Flow
        </button>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-500" />
          <div className="w-8 h-8 rounded-full bg-teal-500" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-center space-x-4">
            {/* Button to decrement value */}
            <button
              onClick={decrement}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              -
            </button>
            {/* Display the current value */}
            <span className="text-xl font-semibold">{value}</span>
            {/* Button to increment value */}
            <button
              onClick={increment}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              +
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncrementDecrement;
