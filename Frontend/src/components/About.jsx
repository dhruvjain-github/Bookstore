import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import profilepic from '../../public/profile.jpg';

function About() {
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
              <img src={profilepic} alt="Team Member Dhruv Jain" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-center transform scale-110 transition-transform duration-300 hover:scale-120"/>
              <h3 className="text-xl font-bold text-center">Dhruv Jain</h3>
              <p className="text-gray-600 text-center mt-4">
                Dhruv Jain is the visionary behind our book world. With a deep passion for literature and a mission to make reading accessible to all, he has created a platform where book lovers can find their next great read.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
