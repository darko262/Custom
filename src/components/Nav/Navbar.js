
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useMediaQuery } from '@react-hook/media-query';
import imagent4 from "../../assets/fondosvg.svg"
import imagent5 from "../../assets/foto5.png"

export default function Navbar() {

    const [nav, setNav] = useState(true)
    //     const [Navbar, setNavBar] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
        if (document.getElementById('navbar')) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-black');

            } else {
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-black');

            }
        }
    }
    const isMobile = useMediaQuery('(max-width: 1124px)');
    return (
        <nav id='navbar' className="w-full py-6 top-0 transition duration-500 ease-in-out z-40 fixed bg-black  px-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Custom Garage</span>
                </a>
                <button onClick={handleNav} className="md:hidden rounded-full  transition-all ease-in-out duration-300 z-10 ">
                    {!nav ? <AiOutlineClose size={30} className='text-red-500   transition-all ease-in-out duration-300  ' /> : <AiOutlineMenu size={30} className='text-green-500    transition-all  ease-in-out duration-300 ' />}
                </button>
                {!nav && (
                    <div className="md:hidden fixed left-0 top-0 w-[100%]  h-full   transition-all ease-in-out  bg-black" >
                        <div className="uppercase p-4 grid grid-cols-1  grid-rows-2 text-center content-center h-full w-full justify-items-center text-white">
                            <Link to={`/`} className=" h-20  w-32  "> <img src={imagent5} alt="logo"></img></Link>
                            <div className=" grid  ">
                                <a href="/"  >Home</a>
                                <a href="/about"  >about</a>
                                {/* <BtnNav href="Servicios" ruta="service" /> */}
                                <a href="/blog"  >blog</a>
                            </div>


                        </div>
                    </div>
                )}
                <div className="  items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:mr-2" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                        </li>
                        <li>
                            <a href="/tienda" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tienda</a>
                        </li>
                        <li>
                            <a href="/contacto" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
