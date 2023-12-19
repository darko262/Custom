import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import imagen from "../../assets/foto3.jpg"
import { useHistory } from 'react-router-dom';
import { getProyecto } from '../../api/Proyectos.api';
import { motion } from 'framer-motion';
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import DOMPurify from 'dompurify'

import { useNavigate } from 'react-router-dom'; // Utiliza useNavigate en lugar de useHistory

export function PaginaBlog(slug) {
    const [proyecto, setProyecto] = useState([]);
    const [error, setError] = useState([]);
    const navigate = useNavigate(); // Utiliza useNavigate para acceder al historial de navegación

    useEffect(() => {
        const loadProyecto = async () => {
            try {
                // Llama a la función getProyecto para obtener datos del proyecto específico
                const response = await getProyecto(slug);

                // Actualiza el estado con los datos del proyecto
                setProyecto(response.data.post);

            } catch (error) {
                console.error('Error al obtener el proyecto:', error);

                // Actualiza el estado de error
                setError(error);

                // Redirige a la página de error
                navigate('/error'); // Utiliza navigate en lugar de history.push
            }
        };

        // Llama a la función loadProyecto
        loadProyecto();
    }, [slug, navigate]);

    // Manejar el clic en una tarjeta



    return (

        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            exit={{ opacity: 0 }}

            className=" relative grid grid-rows-2 grid-cols-1 h-screen w-full  ">
            <div className='  h-full w-full relative bg-black flex items-center text-white bg-cover bg-center justify-center text-center' style={{ backgroundImage: `url(${proyecto.thumbnail})` }}>
                {/* <div className=' relative  h-full w-full bg-black flex items-center text-white bg-cover bg-center justify-center text-center' style={{ backgroundImage: `url(${imagen})` }}> */}
                <h1 className=' text-3xl backdrop-grayscale bg-black/70 rounded-[1rem] w-full md:w-[60%]  font-rocket '>{proyecto.title}
                    <h2 className=' font-mono text-lg lg:text-3xl'> {proyecto.description}</h2>
                </h1>


                <div className=' absolute w-52  h-20 backdrop-grayscale bg-[#FF0022]/20 bottom-0 rounded-3xl  grid grid-cols-2  place-items-center'>
                    <BiSolidLike size={40} className='hover:scale-110 hover:fill-yellow-400' />
                    <BiSolidDislike size={40} className='hover:scale-110 hover:fill-yellow-400' />


                </div>

            </div>

            <div className='grid  grid-rows-3  overflow-y-auto backdrop-grayscale bg-[#FF0022]/20 text-center h-[80%] w-[90%] mx-auto rounded-3xl my-auto'>
                <h3 className='text-[#FF0022] text-5xl md:text-8xl font-rocket   flex  justify-center row-span-1  '>
                    {proyecto.title}
                </h3>


                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(proyecto.content) }} className='text-sm lg:text-xl px-2 text-white' />

            </div>




        </motion.section >





    );
}
