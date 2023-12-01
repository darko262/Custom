import myImage from "../../assets/foto1.jpg"
import myImage2 from "../../assets/about.jpg"
import myImage3 from "../../assets/foto3.jpg"
import myImage4 from "../../assets/foto4.jpg"
import { Datos } from "./Datos"
export function About() {
    return (

        <section id='about-us' className="min-h-screen relative bg-gradient-to-t bg-[#17181d] grid md:grid-cols-2 md:grid-rows-1 gap-5 grid-rows-2 grid-cols-1 ">
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

            <div className='flex-1 flex flex-col text-white h-full  items-center justify-center order-1 md:order-2 mx-3 md:mx-0'>
                <h1 className='text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl'>
                    Servicios que ofrece custom garage
                </h1>
                <p className='md:text-lg text-heading-3 mt-8'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias
                    vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium
                    ducimus suscipit, culpa facere consequuntur repellat delectus.
                </p>
                <div className='pt-8 grid grid-cols-2 items-center gap-4 max-w-3xl md:max-w-[none]'>
                    <div
                        className='p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden'
                    >
                        <div className='rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative'>
                            <span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    className='w-4 h-4 sm:w-5 sm:h-5'
                                >
                                    <path
                                        strokeLinecap='round'
                                        stroke-linejoin='round'
                                        d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'></path>
                                </svg>
                            </span>
                        </div>
                        <h2 className='md:text-xl font-semibold text-heading-2 mt-6 mb-4'>Mission</h2>
                        <p className='md:text-lg text-heading-3 undefined'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div
                        className='p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden'
                    >
                        <div className='rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative'>
                            <span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    className='w-4 h-4 sm:w-5 sm:h-5'
                                >
                                    <path
                                        strokeLinecap='round'
                                        stroke-linejoin='round'
                                        d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                                    ></path>
                                    <path
                                        strokeLinecap='round'
                                        stroke-linejoin='round'
                                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
                                </svg>
                            </span>
                        </div>
                        <h2 className='md:text-xl font-semibold text-heading-2 mt-6 mb-4'>Vision</h2>
                        <p className='md:text-lg text-heading-3 undefined'>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
            </div>


        </section>

    )
}