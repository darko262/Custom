import fondo1 from "../../assets/frente.jpg"
import { CardBlog } from "../BoxCard/CardBlog"
import { CardBlog2 } from "../BoxCard/CardBlog"
import { getAllProyectos } from "../../api/Proyectos.api";
import React, { useState, useEffect } from 'react';
export function HeroBlog() {
    const [proyect, setProyect] = useState([]);


    useEffect(() => {
        loadProyectos();
    }, []);
    const loadProyectos = async () => {
        try {
            // Llama a la función getAllProyectos para obtener datos
            const response = await getAllProyectos();

            // Actualiza el estado con los datos recibidos
            setProyect(response.data.results.posts);
            console.log(response.data.results.posts);
        } catch (error) {
            console.error('Error al obtener proyectos:', error);
        }
    };


    return (
        <section className="bg-gradient-to-b bg-[#17181d] min-h-screen">
            <div className='h-[50vh]     text-white   bg-center  bg-no-repeat   bg-cover ' style={{ backgroundImage: `url(${fondo1})` }}>

                <div className="  h-full  w-5/6 flex  justify-center items-center  content-center backdrop-blur-sm  mx-auto ">

                    <h1 className=" font-rocket  text-5xl  md:text-7xl   lg:text-9xl text-orange-700"> Proyectos Custom Garage </h1>


                </div>
            </div>
            <div className=" w-full h-full  mx-auto my-2">
                {proyect.map((proyect ,index) => (
                      index % 2 === 0 ? (
                        // Si es par, utiliza la CardBlog2
                        // <CardBlog key={proyect.id} title={proyect.title} descripcion={proyect.description} imagen={proyect.thumbnail} />
                        <CardBlog key={proyect.id} title={proyect.title} descripcion={proyect.description} imagen={fondo1} slug={proyect.slug} />
                      ) : (
                        // Si es impar, utiliza otra tarjeta o componente
                        // <CardBlog2 key={proyect.id} title={proyect.title} descripcion={proyect.description} imagen={proyect.thumbnail}/>
                        <CardBlog2 key={proyect.id} title={proyect.title} descripcion={proyect.description} imagen={fondo1} slug={proyect.slug}/>
                      )

                ))}
                {/* <CardBlog />
                <CardBlog2 />
                <CardBlog /> */}


            </div>


        </section>

    )

}