import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import profilepic from '../../public/profile.jpg';


function About() {
  

  const instagramSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <defs>
        <linearGradient id="instagram-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path
        fill="url(#instagram-gradient)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.323 3.608 1.298.974.974 1.236 2.241 1.298 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.323 2.633-1.298 3.608-.974.974-2.241 1.236-3.608 1.298-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.323-3.608-1.298-.974-.974-1.236-2.241-1.298-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.323-2.633 1.298-3.608.974-.974 2.241-1.236 3.608-1.298 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.013 7.052.072 5.769.13 4.636.344 3.675 1.306 2.713 2.268 2.499 3.4 2.441 4.683.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.058 1.283.272 2.416 1.234 3.378.962.962 2.095 1.176 3.378 1.234 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.283-.058 2.416-.272 3.378-1.234.962-.962 1.176-2.095 1.234-3.378.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.283-.272-2.416-1.234-3.378-.962-.962-2.095-1.176-3.378-1.234C15.668.013 15.259 0 12 0zm0 5.838a6.163 6.163 0 100 12.326A6.163 6.163 0 0012 5.838zm0 10.163a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.882 1.44 1.44 0 000 2.882z"
      />
    </svg>
  );


  return (
    <>
      <Navbar className="bg-white shadow-md" />
      <div className="min-h-screen bg-blue-50 flex flex-col items-center">
        <section className="w-full bg-gradient-to-r from-blue-300 to-blue-500">
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center py-32">
            <h1 className="text-white text-5xl font-bold text-center">Welcome to Our Book World</h1>
          </div>
        </section>

        <section className="py-16 px-4 md:px-20 w-full flex flex-col items-center bg-white shadow-md mt-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-gray-700 text-lg mb-6 text-center max-w-3xl">
            Our book website is dedicated to providing book enthusiasts with a vast selection of books from various genres. We believe in the power of reading to transform lives and enrich minds. Our mission is to make literature accessible and enjoyable for everyone.
          </p>
          <p className="text-gray-700 text-lg mb-6 text-center max-w-3xl">
            Explore our curated collection of classic and contemporary titles, discover new authors, and dive into the world of stories that captivate and inspire.
          </p>
        </section>

        <section className="py-16 w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">

            <div className="bg-white p-6 shadow-lg rounded-lg max-w-xs transform transition-transform hover:scale-110">
              <img
                src={profilepic}
                alt="Team Member Dhruv Jain"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-center transform scale-110 transition-transform duration-300 hover:scale-120"
              />
              <h3 className="text-xl font-bold text-center">Dhruv Jain</h3>
              <p className="text-gray-600 text-center mt-4">
                Dhruv Jain is the visionary behind our book world. With a deep passion for literature and a mission to make reading accessible to all, he has created a platform where book lovers can find their next great read.
              </p>
              <div className="flex justify-center mt-4">
                <a href="https://www.instagram.com/d.h.r.u.v__05/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                  {instagramSVG}
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
