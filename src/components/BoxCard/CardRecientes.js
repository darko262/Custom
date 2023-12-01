
import imagen from "../../assets/foto3.jpg"
import fondofull from "../../assets/fondosvg.svg"
export function Cardwork() {
    return (

        <a href="#" class='bg-cover bg-center  rounded-3xl group 'style={{ backgroundImage: `url(${imagen})` }} >
            {/* <!-- <a href="#" class='bg-cover bg-center  rounded-3xl group' ></a> --> */}


            <div class=" h-52 backdrop-blur-sm grid  grid-cols-2  backdrop-grayscale   group-hover:backdrop-grayscale-0 rounded-s-3xl transition-all group-hover:backdrop-hue-rotate-180">

                <img src={imagen} alt='imagen' class=' overflow-hidden h-52  w-52  my-auto  object-cover  rounded-e-full object-center  group-hover:scale-95 transition-all  group-hover:rounded-full ' />

                <div class='h-full place-content-center  text-center grid  backdrop-opacity-80 font-bold'>
                    <h3 class='text-center  text-orange-600'>titulo</h3><p class=' '>
                        jfanksfna sd as asd asd  s sdsdfds fdsf 
                    </p>
                </div>
            </div>
        </a>
    )
}