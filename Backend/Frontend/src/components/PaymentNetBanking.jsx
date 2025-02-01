import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentNetBanking = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState('');

  const banks = ['Bank of America', 'Chase Bank', 'Wells Fargo', 'Citibank', 'HSBC'];

  const handlePayment = () => {
    if (!selectedBank) {
      alert('Please select a bank to proceed.');
      return;
    }
    alert(`Payment successfully made via ${selectedBank}`);
    navigate('/'); // Redirect to the home page after payment
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Net Banking</h2>
        <p className="mb-6 text-gray-600">Select your bank to proceed with the payment:</p>
        <div className="mb-6">
          {banks.map((bank, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="bank"
                value={bank}
                className="mr-2"
                onChange={(e) => setSelectedBank(e.target.value)}
              />
              {bank}
            </label>
          ))}
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentNetBanking;
