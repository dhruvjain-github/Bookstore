import React from 'react';
import { Link } from 'react-router-dom';

function Transaction() {
  const paymentOptions = [
    { id: 1, name: 'UPI', route: '/payment/upi' },
    { id: 2, name: 'Cash on Delivery (COD)', route: '/payment/cod' },
    { id: 3, name: 'Net Banking', route: '/payment/netbanking' },
    { id: 4, name: 'Credit/Debit Card', route: '/payment/card' },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Select Payment Method
        </h1>
        <div className="space-y-4">
          {paymentOptions.map((option) => (
            <Link
              key={option.id}
              to={option.route}
              className="block border rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-gray-700">{option.name}</p>
                <span className="text-gray-500">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transaction;
