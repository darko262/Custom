import { SiBmw, SiHonda, SiKtm, SiDucati, SiYamahamotorcorporation } from 'react-icons/si';
export const BoteneHome = (props) => {
    const { href, nombre } = props;
    return (
        <a href={href}>
            <button className="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-[#FF0022] h-16 w-64  text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                {nombre}
            </button>
        </a>
    )
}
export const BoteneHomeDos = (props) => {
    const { href, nombre } = props;
    return (
        <a href={href}>
            <button class="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                {nombre}
            </button>
        </a>
    )
}



export const CarouselHome = (props) => {
    // const { children } = props;
    return (

        <div className='   flex     movimiento    '>

            <SiBmw className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black  " alt="BMW Logo" />
            <SiHonda className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black " alt="Honda Logo" />
            <SiKtm className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black " alt="KTM Logo" />
            <SiDucati className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black " alt="Ducati Logo" />
            <SiYamahamotorcorporation className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black  " alt="BMW Logo" />
            <SiBmw className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black " alt="Ducati Logo" />
            <SiDucati className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black  " alt="BMW Logo" />

        </div>


    )
}
export const CarouselHomeDos = (props) => {
    // const { children } = props;
    return (

        <div className='   flex     movimientoDos    '>

            <SiBmw className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black  " alt="BMW Logo" />
            <SiHonda className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black " alt="Honda Logo" />
            <SiKtm className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black " alt="KTM Logo" />
            <SiDucati className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black " alt="Ducati Logo" />
            <SiYamahamotorcorporation className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black  " alt="BMW Logo" />
            <SiBmw className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black " alt="Ducati Logo" />
            <SiDucati className=" w-10 md:w-[4rem]   mx-2 h-full md:mx-8 lg:mx-14 fill-black  " alt="BMW Logo" />

        </div>


    )
}