import React from 'react'
import Bannerimg from "../../public/bannermain.jpg"

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-10 my-10">
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to Your Next Great Read,{" "}
              <span className="text-pink-500">Where Stories Come Alive!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Discover an extensive collection of books that cater to every taste and interest. Whether you're seeking thrilling mysteries, inspiring biographies, or captivating fiction, we have something for every reader. Join our community and embark on literary adventures that will inspire and entertain.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Subscribe to our newsletter" />
            </label>
          </div>
          <button className="btn btn-neutral mt-6 bg-blue-600 text-white hover:bg-blue-800">Subscribe</button>
        </div>
        <div className='order-1 md:order-2 w-full md:w-1/2 md:flex md:items-center md:justify-center'>
          <img className="h-70 w-70 md:h-82 md:w-82 rounded-md mt-20" src={Bannerimg} alt="Books and Reading" />
        </div>
      </div>
    </>
  )
}

export default Banner
