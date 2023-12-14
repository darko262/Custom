import { CardPrecio, CardPrecioDos } from "./Card"
import { useMediaQuery } from '@react-hook/media-query';


export function Contancto() {
    return (
        <section className="bg-cover bg-no-repeat bg-center grid md:grid-cols-2 md:grid-rows-1 grid-rows-5 grid-cols-1 lg:w-[90%] mx-auto pb-6 "  >
            <div className="bg-cover bg-no-repeat bg-right lg:bg-cente rounded-tl-3xl rounded-bl-3xl bg-home relative" >
                <h2 className='bg-clip-text  hidden md:grid w-full  top-[90%] left-0    absolute text-center md:text-[4rem] lg:text-[6rem] text-xl  font-bold text-red-900   text-shadow-xl  uppercase '>
                    custom

                </h2>
                <h2 className='bg-clip-text hidden md:grid w-full  bottom-0   absolute text-center md:text-[4rem] lg:text-[6rem] text-xl  font-bold text-white  text-shadow-xl  uppercase '>
                    Garage

                </h2>


            </div>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md row-span-4  md:row-span-1 bg-black rounded-tr-3xl rounded-br-3xl">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>



    )
}


export function Precios() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    return (
        <>
            {
                isMobile ? (<section className="bg-transparent h-full  w-[90%]  mx-auto grid grid-rows-1  gap-5  " >
                    <CardPrecio className=" hover:bg-red-600 md:hover:scale-110   before:bg-red-600   hover:z-20  " titulo="Reparaciones" />
                    <div className=" grid grid-cols-2 gap-2" >
                        <CardPrecioDos className=" hover:bg-yellow-600    " titulo="Mantencion" />
                        <CardPrecioDos className=" hover:bg-green-600     " titulo="Asesorias" />
                    </div>
                </section>

                ) : (
                    <section className="bg-transparent h-full  w-[100%]  flex-row   justify-center  mx-auto   flex  bg-fondo2 bg-cover  bg-no-repeat bg-center bg-fixed ">

                        <CardPrecio className=" hover:bg-red-600 hover:scale-110   before:bg-red-600   hover:z-20  " titulo="Reparaciones" />
                        <CardPrecio className=" hover:bg-yellow-600   md:scale-110 md:hover:scale-125 before:bg-yellow-600  z-10" titulo="Mantencion" />
                        <CardPrecio className=" hover:bg-green-600 hover:scale-110   before:bg-green-600  hover:z-20" titulo="Asesorias" />



                    </section>
                )
            }




        </>
    )
}