import React, { useState } from 'react';
import Cards from './Cards';
import { Link } from "react-router-dom";

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
        "id": 3,
        "name": "Dictionary",
        "title": "Find the meaning and usage of every word.",
        "price": 80,
        "category": "Paid",
        "image": "https://img.freepik.com/free-vector/biography-concept_23-2149341897.jpg"
    },
    {
        "id": 4,
        "name": "Aptitude",
        "title": "Sharpen your skills with comprehensive aptitude tests.",
        "price": 75,
        "category": "Paid",
        "image": "https://img.freepik.com/free-vector/biography-concept_23-2149341897.jpg"
    },
    {
        "id": 5,
        "name": "CBSE",
        "title": "Ace your exams with detailed CBSE guides.",
        "price": 40,
        "category": "Paid",
        "image": "https://img.freepik.com/free-vector/comics_23-2149341899.jpg"
    },
    {
        "id": 6,
        "name": "Biography",
        "title": "This biography, published in 2011, is the authorized account of Steve Jobs’ life.",
        "price": 100,
        "category": "Paid",
        "image": "https://img.freepik.com/free-vector/biography-concept_23-2149341897.jpg"
    },
    {
        "id": 7,
        "name": "Self Improvement",
        "title": "Atomic Habits by James Clear is a comprehensive guide to building good habits and breaking bad ones.",
        "price": 150,
        "category": "Paid",
        "image": "https://img.freepik.com/free-vector/biography-concept_23-2149341897.jpg"
    },
    {
        "id": 8,
        "name": "Comics",
        "title": "I've been me my whole life, and I've had these powers for 6 months.",
        "price": 200,
        "category": "Paid",
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

function Course() {
    const [Book, setBook] = useState(staticBooks);

    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20">
                <div className="mt-14 md:mt-20 lg:mt-28 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Explore Our Curated Collection{" "}
                        <span className="text-pink-500">of Courses & Books!</span>
                    </h1>
                    <p className="mt-6 md:mt-8 lg:mt-12 text-sm md:text-base lg:text-lg max-w-prose mx-auto">
                        We are excited to present a handpicked selection of courses and books designed to enrich your knowledge and spark your curiosity.
                    </p>
                    <Link to="/">
                        <button className="bg-pink-500 hover:bg-pink-600 py-2 px-5 text-white font-semibold rounded-md mt-4 md:mt-5 lg:mt-6">
                            Back to Home
                        </button>
                    </Link>
                </div>
                <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Book.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Course;
