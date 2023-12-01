import myImage from '../../assets/fondo.jpg'
import myImage2 from '../../assets/foto5.png'

export function Footer() {
    return (
        <footer className="p-4  bg-center bg-cover bg-no-repeat text-orange-500 grid md:grid-cols-3 sm:grid-cols-2 shadow-[inset_0_0_1rem_1rem] shadow-black " style={{ backgroundImage: `url(${myImage})` }}>
            <div className=" col-span-1 "></div>
            <div className=" text-center   text-orange-500 md:col-span-2 ">
                <a href="#" className="flex justify-center items-center text-2xl font-rocket text-orange-500">
                    <img src={myImage2} alt='Una descripción de mi imagen.' className=' h-16 w-16' />
                    Custom Garage
                </a>
                <p className="my-6 justify-end  text-white font-extrabold">Open-source library of over 400+ web components and interactive elements built for better web.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6   ">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">CogniBot</a>. All Rights Reserved.</span>
            </div>
        </footer>




    )


}