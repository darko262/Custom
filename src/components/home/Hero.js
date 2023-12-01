import fondo1 from "../../assets/fondo2new.png"
import fondofull from "../../assets/fondosvg.svg"
import fondo2 from "../../assets/foto5.png"
import { SiBmw, SiHonda, SiKtm, SiDucati } from 'react-icons/si';
export function Hero() {
    return (
        // <section className=' min-h-screen relative bg-black text-white   bg-center  bg-no-repeat   bg-cover rounded-3xl  w-11/12 mx-auto ' style={{ backgroundImage: `url(${fondo1})` }}>
        <section className=" relative min-h-screen grid grid-rows-2 bg-gradient-to-b bg-[#17181d]">
            {/* <div className="absolute bottom-[50%]  left-[50%]  translate-x-2/4 translate-y-2/4  bg-white h-16 w-20">
            
            </div> */}
            <div className=' absolute h-full   grayscale bg-center bg-no-repeat bg-cover  rounded-3xl w-full lg:w-11/12 mx-auto ' style={{ backgroundImage: `url(${fondo1})` }}>

            </div>

            <div className=" absolute py-20 px-4 mx-auto  text-center lg:py-16 lg:px-12 ">

                <h1
                    class='text-4xl font-extrabold  font-rocket tracking-tight leading-none md:text-5xl lg:text-6xl text-orange-700'
                >
                    Custom Garage
                </h1>
                <p class='text-lg  font-rocket text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-100'>
                    Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
                    long-term value and drive economic growth.
                </p>
                {/* <img src={fondo2}  className=" w-3/4 md:w-2/3 lg:w-1/4 mx-auto"/> */}


            </div>


            <div className=" absolute bottom-0   h-36  w-9/12  left-[50%]  -translate-x-2/4   bg-transparent ">
                <div className=" grid grid-cols-4 place-items-center  h-full text-3xl md:text-5xl  text-white ">
                    <SiBmw />
                    <SiHonda />
                    <SiKtm />
                    <SiDucati />


                </div>
            </div>
            {/* <div class='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-orange-700'></div> */}
            {/* <div className=' relative h-96 text-white  grayscale bg-center bg-no-repeat bg-cover  rounded-3xl  w-11/12 mx-auto ' style={{ backgroundImage: `url(${fondo1})` }}>
                <div className=" absolute bottom-0   h-16  w-9/12  left-[50%]  -translate-x-2/4  bg-black">
                    <div className=" grid grid-cols-4 place-items-center h-full  plce ">
                        <SiBmw/>
                        <SiHonda/>
                        <SiKtm/>
                        <SiDucati/>
                        

                    </div>


                </div>

            </div> */}


        </section>)
}