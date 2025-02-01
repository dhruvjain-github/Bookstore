import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
    const [Book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://bookstore-lv01.onrender.com/book");
                console.log(res.data);
                setBook(res.data.filter((data)=>data.category!="Free"));
            } catch (error) {
                console.log("Error:", error);
            }
        };
        getBook();
    }, []);



    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20">
                <div className="mt-14 md:mt-20 lg:mt-28 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Explore Our Curated Collection{" "}
                        <span className="text-pink-500">of Courses & Books!</span>
                    </h1>
                    <p className="mt-6 md:mt-8 lg:mt-12 text-sm md:text-base lg:text-lg max-w-prose mx-auto">
                        We are excited to present a handpicked selection of courses and books designed to enrich your knowledge and spark your curiosity. From insightful courses to engaging reads, explore our offerings and take your learning journey to the next level.
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
