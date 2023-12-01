import fondo1 from "../../assets/about.jpg"
import fondo2 from "../../assets/foto2.jpg"
import { CardBlog } from "../BoxCard/CardBlog"
import { CardBlog2 } from "../BoxCard/CardBlog"
import { Datos } from "../home/Datos"

export function HeroAbout() {


    return (
        <section className="min-h-screen flex flex-col justify-center items-center  bg-center  bg-no-repeat   bg-cover py-14 md:pt-0" style={{ backgroundImage: `url(${fondo1})` }}>
           <h1 className="text-orange-700 text-6xl font-rocket  "> about </h1>
            <div className=" bg-white flex-col md:flex-row flex  content-center md:min-h-[25rem] w-full text-center h-[13rem] rounded-xl md:rounded-none flex-wrap " >


                <div className="  md:w-1/3  relative " >
                    <img className=" hidden md:flex mx-auto rounded-3xl w-[15rem] " src={fondo1} />
                    <img className=" hidden md:flex top-3 mx-auto rounded-3xl w-[15rem]" src={fondo2} />

                    <div className=" hidden md:flex w-20 h-20  md:w-[9rem] md:h-[9rem] absolute bg-slate-700  bottom-0 md:bottom-1/2 translate-y-1/2 md:right-0 right-0 md:translate-x-0 -translate-x-1/2 text-center text-slate-200 text-lg md:text-3xl  rounded-3xl ">
                        <h2 className="">
                            Custom Garage
                        </h2>



                    </div>


                </div>
                <div className="   md:w-1/2 w-full md:mx-8 my-auto   md:py-0  overflow-y-auto" >
                    <h2>
                        Custom Garage
                    </h2>

                    <p>
                        l año 1500, cuacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno  asd  l año 1500, cuacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno  as asd as dasd asd asd dasden documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>

                </div>





            </div>
            <div className=" flex absolute bottom-0">
            <Datos texto={"black"} />
            </div>




        </section>

    )

}