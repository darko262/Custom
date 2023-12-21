import fondo1 from "../../assets/frente.jpg"
import { CardBlog, CardBlog3 } from "../BoxCard/CardBlog"
import { CardBlog2 } from "../BoxCard/CardBlog"
import { getAllProyectos, getproyectosByCategory } from "../../api/Proyectos.api";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export function HeroBlogCategory(slug) {
    const [proyect, setProyect] = useState([]);
    const [primero, serPrimero] = useState([]);
    const navigate = useNavigate(); // Utiliza useNavigate para acceder al historial de navegación


    useEffect(() => {
        loadProyectos();
    }, [slug, navigate]);
    const loadProyectos = async () => {
        try {
            // Llama a la función getAllProyectos para obtener datos
            const response = await getproyectosByCategory(slug);

            // Actualiza el estado con los datos recibidos
            setProyect(response.data.results.posts);
            console.log(response.data.results.posts);
            serPrimero(response.data.results.posts[0]);




        } catch (error) {
            console.error('Error al obtener proyectos:', error);
        }
    };


    return (
        <section className="bg-gradient-to-b bg-[#17181d] min-h-screen">
            <div className=" py-24   mx-auto w-[80%] ">
                <div className="   scroll-smooth whitespace-nowrap overflow-x-scroll scrollbar-hide ">
                    <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl  font-medium  rounded dark:bg-gray-700 inline-block  me-1  dark:text-blue-400 border border-blue-400 ">All</a>
                    <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl font-medium  rounded dark:bg-gray-700 inline-block  me-1 dark:text-blue-400 border border-blue-400 ">BMW</a>

                    <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl font-medium  rounded dark:bg-gray-700 inline-block  me-1 dark:text-blue-400 border border-blue-400 ">Susuky</a>
                    <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl font-medium  rounded dark:bg-gray-700 inline-block  me-1 dark:text-blue-400 border border-blue-400 ">Honda</a>
                    <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl font-medium  rounded dark:bg-gray-700 inline-block  me-1 dark:text-blue-400 border border-blue-400 ">Susuky</a>
                    <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl font-medium  rounded dark:bg-gray-700 inline-block  me-1 dark:text-blue-400 border border-blue-400 ">Honda</a>

                </div>
            </div>

            <div className="md:w-[90%] w-[95%] h-full mx-auto">

                <div key={primero.id} className=" py-4" >

                    <CardBlog3 title={primero.title} descripcion={primero.description} imagen={primero.thumbnail} slug={primero.slug} />

                </div>

                <div className="grid grid-cols-2 grid-rows-1 gap-2 md:gap-6">
                    {proyect.map((proyect, index) => (
                        <div key={proyect.id} >
                            <CardBlog3 title={proyect.title} descripcion={proyect.description} imagen={proyect.thumbnail} slug={proyect.slug} />
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )

}