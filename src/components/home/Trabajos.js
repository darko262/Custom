import { Cardwork } from "../BoxCard/CardRecientes";
import imagen from "../../assets/foto3.jpg"
import imagen2 from "../../assets/foto1.jpg"
import imagen3 from "../../assets/frente.jpg"
import { Card, CardMovil } from '../home/Card';

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { getAllProyectos } from "../../api/Proyectos.api";
import { MdChevronLeft, MdChevronRight, MdOutlineChevronLeft } from "react-icons/md"

export function Trabajos() {

    const [backgroundImage, setBackgroundImage] = useState('');
    const [content, setContent] = useState('');
    const [parrafo, setParrafo] = useState('');
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
            setProyect(response.data.results.posts);
            console.log(response.data.results.posts);


        } catch (error) {
            console.error('Error al obtener proyectos:', error);
        }
    };

    // Manejar el clic en una tarjeta
    const handleCardClick = (newBackgroundImage, newContent, newParrafo) => {
        setBackgroundImage(`url("${newBackgroundImage}")`);
        setContent(newContent);
        setParrafo(newParrafo)
    };

    const sliderLeft= () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight= () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }


    const isMobile = useMediaQuery('(max-width: 767px)');
    return (
        <>
            {
                isMobile ? (
                    <section className=" relative flex items-center  justify-center  h-96 w-full py-6" >

                        <div className="overflow-x-scroll  scroll-smooth whitespace-nowrap  h-full w-full scrollbar-hide  ">
                            {proyect.map((proyect) => (

                                <a href={`blog/${proyect.slug}`} className="relative w-[80%]  h-[89%] inline-block p-2 mx-2 bg-cover bg-center rounded-3xl transition-all ease-in-out " style={{ backgroundImage: `url(${proyect.thumbnail})` }}>
                                {/* <a href={`blog/${proyect.slug}`} className="relative w-[80%]  h-[89%] inline-block p-2 mx-2 bg-cover bg-center rounded-3xl transition-all ease-in-out " style={{ backgroundImage: `url(${imagen3})` }}> */}
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
                            className="bg-cover bg-center lg:col-span-1  md:col-span-2   transition-all ease-in-out rounded-3xl "
                            style={{ backgroundImage }}
                        >
                        </div>
                        <div className=" bg-cover bg-center col-span-2  text-white   "
                        >
                            <div className=" grid grid-rows-4 grid-cols-1 place-content-center h-full">
                                <h1 className="text-3xl font-bold mb-4  justify-center flex items-center ">{content}</h1>
                                <p className=" flex items-center justify-center w-[80%]  text-center m-auto transition-all  ease-in-out duration-150 ">{parrafo} </p>

                                <div className="rounded-lg   row-span-2  flex items-center relative   ">
                                    {/* Contenido de la sección */}
                                    <MdOutlineChevronLeft size={40} onClick={sliderLeft} className=" cursor-pointer" />
                                    {/* Tarjetas en la esquina inferior derecha */}
                                    <div  id="slider" className="overflow-x-scroll   scroll-smooth whitespace-nowrap  h-full w-full scrollbar-hide  ">
                                        {proyect.map((proyect) => ((
                                            <Card
                                                backgroundImage={`url(${proyect.thumbnail})`}
                                                // backgroundImage={`url(${imagen3})`}
                                                key={proyect.id}
                                                onClick={() => handleCardClick(`${proyect.thumbnail}`, `${proyect.title}`, `${proyect.description}`)}
                                                // onClick={() => handleCardClick(`${imagen3}`, `${proyect.title}`, `${proyect.description}`)}
                                            />

                                        ))
                                        )}


                                    </div>
                                    <MdChevronRight size={40}  onClick={sliderRight} className=" cursor-pointer"/>
                                </div>
                            </div>

                        </div>

                    </section>
                )
            }
        </>
    );
}
