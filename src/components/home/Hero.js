
import {  BoteneHomeDos, CarouselHome } from '../Botones/Botones';
export function Hero() {
    return (
        <section className='h-screen relative  text-white  bg-fixed   max-w-screen overflow-x-hidden '>
            <div className="  flex  flex-col h-screen">
                <div className='  h-[50vh] w-full justify-center bg-moto2 bg-center  bg-no-repeat bg-cover '>

                </div>
                <div className=" h-16 lg:h-28  w-full  absolute overflow-hidden bg-[#FF0022]  flex  top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2   -skew-y-12    ">
                    <CarouselHome />
                    <CarouselHome />
                </div>

                <div className='   h-16  w-full  lg:h-28    bg-yellow-400  overflow-hidden absolute flex  z-10 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2    skew-y-12   '>
                    <CarouselHome />
                    <CarouselHome />
                </div>


                <div className='h-[50vh]   w-full  flex  flex-col   justify-center items-center  py-5  mx-5 z-10'>
                    <h1 className='bg-clip-text    w-full  text-center lg:text-[6rem]  text-5xl font-rocket  font-bold text-orange-700   text-shadow-xl  uppercase  '>
                        custom Garage

                    </h1>


                    <h2 className='text-center text-white text-xl font-bold text-shadow-xl  uppercase  '>
                        el mejor taller para motocicletas en temuco
                    </h2>

                    <div className=' grid md:grid-cols-2 grid-cols-1 gap-3 py-2' >
                        <BoteneHomeDos nombre="About us" href="about" />
                        <BoteneHomeDos nombre=" Proyectos" href="blog" />

                    </div>



                </div>


            </div>
        </section>
    )
}
