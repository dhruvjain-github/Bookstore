import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
    return (
        <>
            <Navbar className="bg-white shadow-md" />
            <div className="min-h-screen bg-blue-50 flex flex-col items-center py-12 px-4">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        We're here to assist you with any questions or concerns. Reach out to us and we’ll get back to you as soon as possible.
                    </p>
                </section>

                {/* Contact Form */}
                <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                    <label className="block mb-4">
                        <span className="text-gray-700">Name:</span>
                        <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500" placeholder="Full Name" />
                    </label>
                    <label className="block mb-4">
                        <span className="text-gray-700">Email:</span>
                        <input type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500" placeholder="Email@site.com" />
                    </label>
                    <label className="block mb-4">
                        <span className="text-gray-700">Message:</span>
                        <textarea className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500" placeholder="Your message here" rows="4"></textarea>
                    </label>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
                </div>

                {/* Help and Facilities Section */}
                <section className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg mt-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">How We Can Help</h2>
                    <ul className="list-disc list-inside space-y-4">
                        <li className="text-gray-700">24/7 Customer Support: Our team is available around the clock to assist with any questions or issues.</li>
                        <li className="text-gray-700">Expert Advice: Get personalized recommendations and advice on the best books to suit your interests.</li>
                        <li className="text-gray-700">Order Assistance: Help with tracking your orders, returns, and exchanges.</li>
                        <li className="text-gray-700">Technical Support: Assistance with any technical issues you might encounter on our website.</li>
                    </ul>
                </section>
            </div>
            <Footer className="bg-white shadow-md" />
        </>
    );
}

export default Contact;
