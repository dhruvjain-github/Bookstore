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
            
          </div>
          
        </div>
        <div className='order-1 md:order-2 w-full md:w-1/2 md:flex md:items-center md:justify-center'>
          <img className="h-70 w-70 md:h-82 md:w-82 rounded-md mt-20" src={Bannerimg} alt="Books and Reading" />
        </div>
      </div>
    </>
  )
}

export default Banner
