import React from 'react'
import { FaCircle } from "react-icons/fa6";

import HeroSvg from '../svg/heroSvg'

const Hero = () => {
    return (
        <div>

            <div className=" pt-20 sm:pt-0 sm:h-[calc(100vh-90px)] bg-base-200">

                <div className="flex flex-col sm:flex-row sm:px-28 px-10  h-full justify-between items-center   ">

                    <div className="">


                        <h1 className='text-5xl font-bold'  >Lessons and insights</h1>
                        <h1 className='text-5xl text-success font-bold'  >From 8 years</h1>
                        <p className='my-7 text-lg'  >Where to grow your business as a photograph: siteor social media?  </p>
                        <button type="button" class="btn btn-success px-11 text-white rounded-md text-lg">Register</button>
                    </div>


                    <div className="">
                        <HeroSvg />
                    </div>

                </div>
                <div className="bg-base-200 flex  pb-3 gap-1 justify-center items-center">
                    <FaCircle className='text-success text-[10px]   ' />
                    <FaCircle className='text-green-200 text-[10px]   ' />
                    <FaCircle className='text-green-200 text-[10px]   ' />

                </div>
            </div>


        </div>
    )
}

export default Hero