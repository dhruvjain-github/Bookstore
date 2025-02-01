import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentCOD = () => {
  const navigate = useNavigate();

  const handleConfirmCOD = () => {
    alert('Your order has been placed successfully via Cash on Delivery!');
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Cash on Delivery</h2>
        <p className="mb-6 text-gray-600">
          Your order will be delivered to your address. Payment will be collected at the time of delivery.
        </p>
        <button
          onClick={handleConfirmCOD}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PaymentCOD;
