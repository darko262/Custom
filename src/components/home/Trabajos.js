import { Cardwork } from "../BoxCard/CardRecientes";
import imagen from "../../assets/foto3.jpg"
import imagen2 from "../../assets/foto1.jpg"
import imagen3 from "../../assets/frente.jpg"
import { Card, CardMovil } from '../home/Card';

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { getAllProyectos } from "../../api/Proyectos.api";
import { MdChevronLeft, MdChevronRight, MdOutlineChevronLeft } from "react-icons/md"
import { BoteneHome } from "../Botones/Botones";

export function Trabajos() {

    const [backgroundImage, setBackgroundImage] = useState('');
    const [content, setContent] = useState('');
    const [parrafo, setParrafo] = useState('');
    const [slug, setSlug] = useState('');
    const [proyect, setProyect] = useState([]);


    useEffect(() => {
        loadProyectos();
    }, []);
    const loadProyectos = async () => {
        try {
            // Llama a la función getAllProyectos para obtener datos
            const response = await getAllProyectos();

            // Actualiza el estado con los datos recibidos
            const primerProyecto = response.data.results.posts[0];
            setBackgroundImage(`url("${primerProyecto.thumbnail}")`); // Coloca la imagen estática por defecto
            setContent(primerProyecto.title);
            setParrafo(primerProyecto.description);
            setSlug(primerProyecto.slug);
            
            setProyect(response.data.results.posts);
            console.log(response.data.results.posts);


        } catch (error) {
            console.error('Error al obtener proyectos:', error);
        }
    };

    // Manejar el clic en una tarjeta
    const handleCardClick = (newBackgroundImage, newContent, newParrafo, newSlug) => {
        setBackgroundImage(`url("${newBackgroundImage}")`);
        setContent(newContent);
        setParrafo(newParrafo);
        setSlug(newSlug);
    };

    const sliderLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 300;
    }
    const sliderRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 300;
    }


    const isMobile = useMediaQuery('(max-width: 767px)');
    return (
        <>
            {
                isMobile ? (
                    <section className=" relative flex items-center  justify-center  h-96 w-full py-6" >

                        <div className="overflow-x-auto  scroll-smooth whitespace-nowrap  h-full w-full scrollbar-hide  ">
                            {proyect.map((proyect) => (

                                // <a href={`blog/${proyect.slug}`} className="relative w-[80%]  h-[89%] inline-block p-2 mx-2 bg-cover bg-center rounded-3xl transition-all ease-in-out " style={{ backgroundImage: `url(${proyect.thumbnail})` }}>
                                <a href={`blog/${proyect.slug}`} className="relative w-[80%]  h-[89%] inline-block p-2 mx-2 bg-cover bg-center rounded-3xl transition-all ease-in-out  snap-center" style={{ backgroundImage: `url(${imagen3})` }}>
                                    <div className="absolute bottom-0 left-0 p-2 text-white" key={proyect.id}>
                                        <h4>{proyect.title}</h4>
                                        {/* <p>{proyect.description}</p> */}
                                    </div>
                                </a>
                            ))}

                        </div>





                    </section >
                ) : (
                    <section className="grid lg:grid-cols-3 md:grid-cols-4 min-h-screen py-8 px-5" >
                        <div
                            className="bg-cover bg-center lg:col-span-1  md:col-span-2 relative   transition-all ease-in-out rounded-3xl bg-[#FF0022]  h-full flex justify-center items-center "

                        >
                            <div
                                className="bg-cover bg-center  w-[80%] h-[80%]  transition-all ease-in-out rounded-3xl  border-4 border-black"
                                style={{ backgroundImage }}
                            >
                            </div>
                            <h2 className='bg-clip-text  hidden md:grid w-full  top-[90%] left-1/2  -translate-x-1/2 -translate-y-1/2 absolute text-center md:text-[6rem] text-xl  font-bold text-red-900   text-shadow-xl  uppercase '>
                                custom 

                            </h2>
                            <h2 className='bg-clip-text hidden md:grid w-full  bottom-0  left-[53%]  -translate-x-[53%] -translate-y-1/2 absolute text-center md:text-[6rem] text-xl  font-bold text-white  text-shadow-xl  uppercase '>
                                 Garage

                            </h2>
                        </div>
                        <div className=" bg-cover bg-center col-span-2  text-white   "
                        >
                            <div className=" grid grid-rows-4 grid-cols-1 place-content-center h-full">

                                <h2 className="text-5xl font-bold mb-4  justify-center flex flex-col items-center ">
                                    <span className="text-red-600 text-xl underline decoration-4 ">
                                        Proyecto
                                    </span>{content}</h2>
                                <p className=" flex flex-col  justify-center w-[80%]   m-auto transition-all  ease-in-out duration-150 gap-3 ">
                                    <span className="text-red-600 text-xl underline decoration-4 ">
                                        Proyecto
                                    </span>{parrafo}

                                    <BoteneHome  nombre=" Seguir leyendo" href={`blog/${slug}`}/>

                                </p>

                                <div className="rounded-lg   row-span-2  flex items-center relative gap-2   ">
                                    {/* Contenido de la sección */}
                                    <MdOutlineChevronLeft size={40} onClick={sliderLeft} className=" cursor-pointer" />
                                    {/* Tarjetas en la esquina inferior derecha */}
                                    <div id="slider" className="overflow-x-auto  snap-x scroll-smooth whitespace-nowrap  h-full w-full  scrollbar-hide  ">

                                        {proyect.map((proyect) => ((
                                            <Card
                                                // backgroundImage={`url(${proyect.thumbnail})`}
                                                backgroundImage={`url(${imagen3})`}
                                                key={proyect.id}
                                                // onClick={() => handleCardClick(`${proyect.thumbnail}`, `${proyect.title}`, `${proyect.description}`)}
                                                onClick={() => handleCardClick(`${imagen3}`, `${proyect.title}`, `${proyect.description}`,`${proyect.slug}`)}
                                            />

                                        ))
                                        )}



                                    </div>
                                    <MdChevronRight size={40} onClick={sliderRight} className=" cursor-pointer" />
                                </div>
                            </div>

                        </div>

                    </section>
                )
            }
        </>
    );
}
