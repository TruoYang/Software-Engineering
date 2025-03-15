import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    //sm:px-10 md:px-20 lg:px-32 xl:px-48 px-5 mt-10 bg-white 
    // We are using lg at the maximize screen
    <div className="flex items-center justify-center bg-white bg-opacity-90 rounded-lg my-30
        sm:px-5 md:px-10 lg:px-18 xl:px-24 px-5 mt-10   sm:mx-16 md:mx-22 lg:mx-40 xl:mx-60 py-10
    ">
      <div className="text-center max-w-3xl p-10 ">
        <h1 className="font-extrabold text-[30px] mb-6">
          <span className="text-[#f45858]">Discover the world with AI:</span>
          <br />
          The best recommendation for the whole trip
        </h1>
        <p className="text-lg text-[#40a9ea] mb-6">
          This is my habi song I like to sing it all day long. <br />
          I'll teach you the words then you can sing along.
        </p>
        <Link to="create-trip">
          <Button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            I'm ready, let's start
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
