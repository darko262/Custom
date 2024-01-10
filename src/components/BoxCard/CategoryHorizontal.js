import { getAllCategory } from "../../api/Proyectos.api";
import React, { useState, useEffect } from 'react';

export const HeaderCategory = () => {

    const [proyect, setProyect] = useState([]);
    useEffect(() => {
        loadProyectos();
    }, []);
    const loadProyectos = async () => {
        try {



            const response = await getAllCategory();
            setProyect(response.data.categories);
            console.log(response.data.categories);
            // console.log(response.data.categories[0].marca);
            // serPrimero(response.data.results.posts[0]);

        }
        catch (error) {
            console.error('Error al obtener proyectos:', error);
        }
    };





    return (

        <div className="   scroll-smooth whitespace-nowrap overflow-x-scroll scrollbar-hide ">
            <a href="/blog" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl font-medium  rounded dark:bg-gray-700 inline-block  me-1 dark:text-blue-400 border border-blue-400 ">
                All
            </a>
            {proyect.map((proyect, index) => (
                <a href={`/category/${proyect.slug}`} className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl font-medium  rounded dark:bg-gray-700 inline-block  me-1 dark:text-blue-400 border border-blue-400 " key={proyect.id} >
                    {proyect.name}
                </a>))}

        </div>)
}