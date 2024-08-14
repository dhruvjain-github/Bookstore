import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ item }) => {
    return (
        <div className="p-4 mt-5 my-3">
            <div className="card bg-base-100 md:w-96 shadow-xl md:h-120 w-90 hover:cursor-pointer transform transition-transform duration-300 hover:scale-105 dark:bg-slate-800 dark:text-white">
                <figure className="h-70 w-full overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name} // Use the item's name as the alt text for better accessibility
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body flex flex-col justify-between">
                    <div className="h-20 overflow-y-auto">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p className="mt-2 text-sm">{item.title}</p>
                    </div>
                    <div className="card-actions justify-between mt-4">
                        <div className="badge badge-outline">{item.price}</div>

                        {/* Pass the item data via the state prop */}
                        <Link to="/buy" state={{ item }}>
                            <button className="badge px-5 py-3 badge-outline hover:bg-pink-500 hover:text-white duration-300">
                                Buy
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
