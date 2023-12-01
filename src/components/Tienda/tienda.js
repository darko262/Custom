import fondo1 from "../../assets/tienda.jpeg"

export function PaginaEnContruccion() {
    return (
        <div className=" h-screen bg-contain flex justify-center items-end bg-center lg:bg-cover bg-no-repeat bg-red-800 " style={{ backgroundImage: `url(${fondo1})` }}>
            <div className=" h-1/3  flex justify-center items-center w-3/4 md:w-1/2 backdrop-blur-md bg-white/30 rounded-[5rem]">
                <h1 className=" font-rocket text-3xl ">
                    Pagina en Contruccion
                </h1>


            </div>

        </div>
    )
}


