import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentCard = () => {
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    const { cardNumber, cardHolder, expiryDate, cvv } = cardDetails;

    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      alert('Please fill out all the fields to proceed with payment.');
      return;
    }

    // Simulating payment process
    alert('Payment successful!');
    navigate('/'); // Redirect to the home page after successful payment
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Credit/Debit Card Payment</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
              placeholder="Enter your card number"
              maxLength="16"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Card Holder Name</label>
            <input
              type="text"
              name="cardHolder"
              value={cardDetails.cardHolder}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
              placeholder="Enter cardholder name"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
              <input
                type="month"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 font-medium mb-2">CVV</label>
              <input
                type="password"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                placeholder="Enter CVV"
                maxLength="3"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handlePayment}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentCard;
