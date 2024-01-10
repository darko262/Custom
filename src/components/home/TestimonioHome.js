import { getAllComent } from "../../api/Proyectos.api";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
export function TestimonioHome() {

    const [Testi, setTesti] = useState([]);

    useEffect(() => {
        loadComent();
    }, []);

    const loadComent = async () => {
        try {
            const response = await getAllComent();
            console.log(response.data.status);

            // Verifica que response.data.status sea un objeto antes de actualizar el estado
            if (typeof response.data.status === 'object' && response.data.status !== null) {
                const testimoniosArray = Object.values(response.data.status);
                setTesti(testimoniosArray);
            } else {
                console.error('La respuesta no es un objeto válido:', response.data.status);
            }
        } catch (error) {
            console.error('Error al obtener proyectos:', error);
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    }

    return (
        <section className="bg-black relative" >
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-white" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                    </svg>
                    <Slider {...settings}>
                        {Testi.map((testimonio) => (
                            <div>

                                <div key={testimonio.name} className="w-full h-full inline-block relative  p-4 mb-4">
                                    <blockquote className="mb-4">
                                        <p className="text-2xl font-medium text-white">
                                            {testimonio.comentario}
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center space-x-3">
                                        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                                        <div className="flex flex-col items-center text-white">
                                            <div className="font-medium">{testimonio.name}</div>
                                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                        </div>
                                    </figcaption>
                                </div>

                            </div>
                        ))}

                    </Slider>
                    {/* <div className="flex relative items-center justify-center text-center flex-row ">
                        <div className="w-full  overflow-y-auto scroll-smooth h-[15rem]">
                            {Testi.map((testimonio) => (
                                <div key={testimonio.name} className="w-full h-full inline-block relative  p-4 mb-4">
                                    <blockquote className="mb-4">
                                        <p className="text-2xl font-medium text-white">
                                          {testimonio.comentario}
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center space-x-3">
                                        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                                        <div className="flex flex-col items-center text-white">
                                            <div className="font-medium">{testimonio.name}</div>
                                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                        </div>
                                    </figcaption>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </figure>
            </div>
        </section >

    )
}
