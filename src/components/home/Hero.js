import { SiBmw, SiHonda, SiKtm, SiDucati } from 'react-icons/si';
import { motion } from 'framer-motion';
import { BoteneHome, CarouselHome } from '../Botones/Botones';
export function Hero() {
    return (
        <section className='h-screen relative  text-white  bg-fixed   max-w-screen overflow-x-hidden '>
            <div className=" lg:flex-row flex  flex-col h-screen">
                <div className=' lg:h-full h-[50vh] w-full justify-center bg-moto2 bg-center lg:bg-right bg-no-repeat bg-cover '>

                </div>
                <div className='md:h-[10rem] h-16 lg:h-full lg:w-1/5 w-full  absolute  bg-[#FF0022] flex items-center lg:flex-col flex-row  justify-center  top-1/2 lg:left-1/2  lg:-translate-x-1/2 -translate-y-1/2 lg:-skew-x-12  lg:-skew-y-0 -skew-y-12  '>
                    <div className=' lg:animate-none flex items-center flex-row justify-center lg:flex-col h-full w-full overflow-hidden'>
                        <SiBmw className=" w-10 md:w-[4rem]  mx-auto h-full fill-black  " alt="BMW Logo" />
                        <SiHonda className=" w-10 md:w-[4rem]  mx-auto h-full fill-black " alt="Honda Logo" />
                        <SiKtm className=" w-10 md:w-[4rem]  mx-auto h-full fill-black " alt="KTM Logo" />
                        <SiDucati className=" w-10 md:w-[4rem]  mx-auto h-full fill-black " alt="Ducati Logo" />
                        <SiBmw className=" w-10 md:w-[4rem]  mx-auto h-full fill-black  " alt="BMW Logo" />
                        <SiHonda className=" w-10 md:w-[4rem]  mx-auto h-full fill-black " alt="Honda Logo" />
                        <SiKtm className=" w-10 md:w-[4rem]  mx-auto h-full fill-black " alt="KTM Logo" />
                        <SiDucati className=" w-10 md:w-[4rem]  mx-auto h-full fill-black " alt="Ducati Logo" />
                    </div>

                </div>
             
                <div className=' lg:hidden md:h-[10rem] h-16  w-full      bg-yellow-400  overflow-hidden  flex  z-10    skew-y-12 '>
                    <CarouselHome />
                </div>
                <h1 className='bg-clip-text  hidden lg:grid w-full top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 absolute text-center lg:text-[6rem] text-xl  font-bold text-red-900   text-shadow-xl  uppercase '>
                    custom Garage

                </h1>
                <h2 className='bg-clip-text hidden lg:grid w-full top-[55%] left-1/2  -translate-x-1/2 -translate-y-1/2 absolute text-center lg:text-[6rem] text-xl  font-bold text-white  text-shadow-xl  uppercase '>
                    custom Garage

                </h2>


                <div className='h-[50vh] lg:h-[100vh]  w-full  flex lg:items-end flex-col lg:justify-end  justify-center items-center  py-5  mx-5'>
                    <h1 className='bg-clip-text   lg:hidden w-full  text-center lg:text-[6rem]  text-5xl font-rocket  font-bold text-orange-700   text-shadow-xl  uppercase '>
                        custom Garage

                    </h1>


                    <h2 className='text-center text-white text-xl font-bold text-shadow-xl  uppercase  '>
                        el mejor taller para motocicletas en temuco
                    </h2>

                    <div className=' grid md:grid-cols-2 grid-cols-1 gap-3 py-2' >
                        <BoteneHome nombre="About us" href="about" />
                        <BoteneHome nombre=" Proyectos" href="blog" />

                    </div>



                </div>


            </div>
        </section>
    )
}
