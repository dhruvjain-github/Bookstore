import React from 'react';

function PaymentUPI() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">UPI Payment</h1>
        <p className="text-gray-600 mb-6">
          Please enter your UPI ID to proceed with the payment.
        </p>
        <input
          type="text"
          placeholder="Enter UPI ID"
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-700 transition">
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default PaymentUPI;
