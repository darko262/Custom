import myImage from "../../assets/foto1.jpg"
import myImage2 from "../../assets/about.jpg"
import myImage3 from "../../assets/foto3.jpg"
import myImage4 from "../../assets/foto4.jpg"
import { BoteneHome } from "../Botones/Botones"

export function About() {
    return (

        <section id='about-us' className="min-h-screen relative bg-gradient-to-t bg-black grid md:grid-cols-2 md:grid-rows-1  grid-rows-2 grid-cols-1  py-5">
            <div className="grid md:grid-cols-2 md:grid-rows-3 grid-rows-2 grid-cols-3  gap-3 max-h-screen md:order-1 order-2   ">
                <img
                    src={myImage}
                    alt='banner image'
                    className='h-full w-full object-cover object-center MejorFondo'
                />
                <img
                    src={myImage2}
                    alt='banner image'
                    className='h-full w-full md:row-span-2 col-span-2 md:col-span-1 object-cover  object-right-bottom MejorFondo'
                />
                <img
                    src={myImage3}
                    alt='banner image'
                    className='h-full w-full  md:row-span-2 md:col-span-1 col-span-2 object-cover MejorFondo '
                />
                <img
                    src={myImage4}
                    alt='banner image'
                    className='h-full w-full  object-cover MejorFondo '
                />
            </div>

            <div className='flex-1  order-1 md:order-2  bg-[#FCFAED] w-full'>
                <div className="flex flex-col text-black h-full   justify-center w-[90%] lg:w-1/2  mx-auto">
                    <span className=" text-red-600 text-xl underline decoration-4 ">
                        About us 
                    </span>
                    
                    <h2 className='text-heading-1 font-bold text-5xl md:text-[5rem] font-rocket'>
                         custom garage
                    </h2>
                    <p className='md:text-lg text-heading-3 my-8 md:my-1'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias
                        vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium
                        ducimus suscipit, culpa facere consequuntur repellat delectus.
                    </p>
                    <BoteneHome nombre="Seguir leyendo" href="about"/>
                </div>

            </div>


        </section>

    )
}