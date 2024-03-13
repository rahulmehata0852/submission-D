import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {
    return (
        <div>



            <div className=" sm:py-3">


                <div className="flex sm:px-10 md:px-28 px-5  items-center justify-between">
                    <div className=' flex justify-center items-end'>
                        <h1 className='text-black font-bold text-2xl'>P</h1>
                        <h2 className='font-semibold text-success text-2xl'  >cl</h2>
                    </div>

                    <div className="flex-1 hidden sm:flex gap-12 items-center justify-end">
                        <h1 className='text-black font-normal'  >Home</h1>
                        <h1 className='text-black font-normal'  >Features</h1>
                        <h1 className='text-black font-normal'  >Blog</h1>
                        <h1 className='text-black font-normal'  >Pricing</h1>
                        <button type="button" class="btn btn-success px-8  rounded-sm text-white  ">Register Now   <FaArrowRight /> </button>
                    </div>
                    <div className="sm:hidden">

                        <div className="dropdown dropdown-hover dropdown-left ">
                            <label className=" m-1"><MdOutlineMenuOpen className='text-2xl' /></label>
                            <ul className="dropdown-content mt-8 ml-4 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>   <h1>Home</h1></li>
                                <li> <h1>Features</h1></li>
                                <li> <h1>Blog</h1></li>
                                <li> <h1>Pricing</h1></li>
                                <li> <button type="button" class="btn btn-success  my-2  btn-sm  rounded-sm text-white  ">Register Now   <FaArrowRight /> </button>
                                </li></ul>
                        </div>
                    </div>



                </div>

            </div>




        </div>
    )
}

export default Navbar