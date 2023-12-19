
export function CardBlog({ title, descripcion, imagen, slug }) {
    return (

        <a href={`blog/${slug}`} className='bg-cover bg-center group '  >
            {/* <a href="#" className='bg-cover bg-center    bg-[#17181d] shadow-[inset_0_0_1rem_1rem] shadow-orange-900'  ></a> */}
            {/* <!-- <a href="#" className='bg-cover bg-center  rounded-3xl group' ></a> --> */}
            <div className=" h-[25rem] backdrop-blur-sm grid  grid-cols-1 grid-rows-2 sm:grid-cols-2   rounded-s-3xl  place-items-center sm:grid-rows-1 ">

                <img src={imagen} alt='imagen' className='  h-full md:w-3/4  lg:w-1/2  object-cover  rounded-tl-[5rem] rounded-br-[5rem] md:group-hover:rounded-tr-[5rem]  md:group-hover:rounded-bl-[5rem]  md:group-hover:w-4/5  transition-all ease-in-out duration-500  ' />

                <div className='h-full w-full  px-4 text-center grid  backdrop-opacity-80  text-white '>
                    <h3 className=' text-3xl self-start font-rocket'>{title}</h3><p className=' '>
                        {descripcion}
                    </p>
                </div>
            </div>
        </a>
    )
}
export function CardBlog2({ title, descripcion, imagen, slug }) {
    return (

        <a href={`blog/${slug}`} className='bg-cover bg-center  group  '  >
            {/* <!-- <a href="#" className='bg-cover bg-center  rounded-3xl group' ></a> --> */}
            <div className=" h-[25rem] backdrop-blur-sm grid  grid-cols-1 grid-rows-2 sm:grid-cols-2 rounded-s-3xl place-items-center sm:grid-rows-1 ">

                <div className='h-full w-full  px-4 text-center grid  backdrop-opacity-80  text-white  order-2 sm:order-1'>
                    <h3 className=' text-3xl self-start font-rocket '>{title}</h3><p className=' '>
                        {descripcion}
                    </p>
                </div>
                <img src={imagen} alt='imagen' className='  order-1 sm:order-2 h-full md:w-3/4   lg:w-1/2  object-cover   rounded-tr-[5rem] rounded-bl-[5rem]  md:group-hover:rounded-tl-[5rem]  md:group-hover:rounded-br-[5rem]  md:group-hover:w-4/5  transition-all ease-in-out duration-500   ' />
            </div>
        </a>
    )
}


// style={{ backgroundImage: `url(${imagen})` }}

export function CardBlog3({ title, descripcion, imagen, slug }) {
    return (

        <a href={`blog/${slug}`} className='bg-cover bg-center group  py-5 transition-all duration-300 ease-in-out'  >
            <div className=" h-[20rem] md:h-[25rem] w-full py-2  px-4  flex flex-1 justify-end items-center flex-col  bg-center bg-cover bg-no-repeat rounded-3xl transition-all duration-300  " style={{ backgroundImage: `url(${imagen})` }}>
                <div className='  bg-black/60  flex flex-col justify-center items-center rounded-3xl text-white w-full py-3 px-4 group-hover:h-full transition-all  duration-1000  ease-in-out group-hover:scale-100  scale-90'>
                    <h3 className=' text-3xl font-rocket px-2'>{title}</h3>
                    <p className=' hidden md:flex '>
                        {descripcion}
                    </p>
                </div>
            </div>
        </a>
    )
}

