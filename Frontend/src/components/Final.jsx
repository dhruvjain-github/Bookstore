import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Final() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item; // Safely access the item from location.state
  console.log(location);
  
  // Debugging: Log the item to see if it's being received
  console.log('Item received:', item);

  if (!item) {
    return <p>No item data available</p>; // Display this message if the item is missing
  }

  const discount = (x) => {
    return (x - x * 0.25).toFixed(2); // Ensure discount is rounded to 2 decimal places
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl bg-base-100 shadow-xl rounded-md overflow-hidden p-4 md:p-6">
        {/* Cross Mark */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        
        <div className="flex flex-col md:flex-row">
          <figure className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0 md:mr-4"> {/* Added margin-right for gap */}
            <img
              src={item.image}
              alt="Book Cover"
              className="object-cover w-full h-48 md:h-64 rounded-md"
            />
          </figure>
          <div className="flex-grow w-full md:w-1/2 p-4">
            <h2 className="text-xl md:text-2xl font-bold">{item.name}</h2>
            <h5 className="text-lg md:text-xl font-semibold">{item.category}</h5>
            <p className="mt-2 text-sm md:text-base overflow-auto max-h-40">{item.title}</p>
            <div className="pricing mt-4">
              <p className="text-gray-500 line-through text-sm md:text-base">${item.price}</p>
              <p className="text-green-500 text-lg md:text-xl">${discount(item.price)}</p>
              <p className="text-red-500 text-sm md:text-base">Save 25%</p>
            </div>
            <div className="card-actions mt-4 flex justify-end">
              {/* Buy Now Button */}
              <button
                className="btn btn-buy transform transition-all duration-300 hover:scale-110 hover:bg-pink-700 text-white bg-pink-500 text-sm md:text-base px-4 py-2"
                onClick={() => navigate('/transaction', { state: { item } })}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Final;
