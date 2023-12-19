import React from 'react';

const Card = ({ backgroundImage, onClick }) => {
  return (
    <div
      className=" bg-cover bg-center  cursor-pointer rounded-3xl transition-all  ease-in-out relative w-[80%]  h-[100%] inline-block  mx-2 snap-start "
      style={{ backgroundImage }}
      onClick={onClick}
    >

    </div>
  );
};



// const CardMovil = () => {
//   return (
//     <div className="overflow-x-scroll  scroll-ml-6 scroll-smooth whitespace-nowrap  h-full">
//       <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" className="w-full h-full  inline-block p-2 " />


//       <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" className="w-full h-full inline-block p-2 " />


//       <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" className="w-full h-full inline-block p-2 " />


//       <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" className="w-full h-full inline-block p-2 " />


//       <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" className="w-full h-full inline-block p-2 " />


//       <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" className="w-full h-full inline-block p-2 " />
//     </div>
//   );
// };

const CardPrecio = ({ className, titulo }) => {
  return (
    <div className={`relative flex flex-row  md:flex-col bg-[#07182E] md:w-[15rem]  w-full  transition-all    place-content-center place-items-center rounded-[10px]  overflow-hidden   ease-in-out ${className} md:before:content-[''] md:before:absolute md:before:w-[10rem]  md:before:h-[130%]   md:after:content[''] md:after:absolute md:after:bg-[#07182E] md:after:inset-[5px] md:after:rounded-[15px] md:before:animate-[spin_5s_linear_infinite] duration-500 `}>
      <div className="px-6 py-8 sm:p-10 sm:pb-6 z-10 grid  ">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
              {`${titulo}`}
            </h2>
            <p className="mt-2 text-sm text-gray-100">Valores desde.</p>
          </div>
          <div className="mt-6">
            <p>
              <span className="text-5xl font-light tracking-tight text-white">
                $35
              </span>
              <span className="text-base font-medium text-white"> /mo </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-6 pb-8 sm:px-8 z-10 ">
        <a aria-describedby="tier-starter" className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
          Contactanos
        </a>
      </div>
    </div>
  )
}
const CardPrecioDos = ({className, titulo}) => {
  return (
    <div className={`relative flex flex-row  md:flex-col bg-[#07182E] md:w-[15rem]  w-full  transition-all    place-content-center place-items-center rounded-[10px]  overflow-hidden   ease-in-out ${className} md:before:content-[''] md:before:absolute md:before:w-[10rem]  md:before:h-[130%]   md:after:content[''] md:after:absolute md:after:bg-[#07182E] md:after:inset-[5px] md:after:rounded-[15px] md:before:animate-[spin_5s_linear_infinite] duration-500 `}>
      <div className="px-6 py-4 sm:p-10 sm:pb-6 z-10   grid grid-rows-1">
        <div className=" ">
          <div>
            <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
            {`${titulo}`}
            </h2>
            <p className="mt-2 text-sm text-gray-100">Valores desde.</p>
          </div>
          <div className="mt-6">
            <p>
              <span className="text-5xl font-light tracking-tight text-white">
                $35
              </span>
              <span className="text-base font-medium text-white"> /mo </span>
            </p>
          </div>
        </div>
        <div className="flex px-6  py-3  z-10 ">
          <a aria-describedby="tier-starter" className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
            Contacto
          </a>
        </div>
      </div>

    </div>
  )
}



export { Card, CardPrecio, CardPrecioDos };



