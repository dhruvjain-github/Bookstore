import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from '../components/Cards'; // Adjust the import path as necessary

const staticBooks = [
    {
        "id": 1,
        "name": "Magazine",
        "title": "Stay updated with the latest trends and stories.",
        "price": 0,
        "category": "Free",
        "image": "https://img.freepik.com/free-vector/biography-concept_23-2149341897.jpg"
    },
    {
        "id": 2,
        "name": "Puzzles",
        "title": "Challenge your mind with fun and engaging puzzles.",
        "price": 0,
        "category": "Free",
        "image": "https://img.freepik.com/free-vector/comics_23-2149341899.jpg"
    },
    {
        "id": 9,
        "name": "Encyclopedia",
        "title": "Explore vast knowledge across various subjects.",
        "price": 0,
        "category": "Free",
        "image": "https://img.freepik.com/free-vector/biography-concept_23-2149341897.jpg"
    }
];

function Freebook() {
    const [Book, setBook] = useState(staticBooks);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mb-8'>
                    <h1 className='font-semibold text-3xl md:text-4xl pb-4 text-center'>
                        Discover Our Free Books Collection!
                    </h1>
                    <p className='text-lg text-gray-700 text-center'>
                        Dive into our selection of free books and explore a variety of genres at no cost. Whether you're looking for classic literature, gripping mysteries, or insightful non-fiction, we offer a curated collection that caters to all tastes. Enjoy reading without the cost!
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {Book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;
