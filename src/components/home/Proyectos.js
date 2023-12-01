import { Cardwork } from "../BoxCard/CardRecientes";


export function Recientes() {


    // const [proyect, setProyect] = useState([]);


    // useEffect(() => {
    //     async function loadProyectos() {
    //         try {
    //             const url = 'https://www.cognibot.dev/api/blog/list';
    //             const res = await axios.get(url);
    //             setProyect(res.data.results.posts);

    //             // console.log(res.data.results.posts);

    //         } catch (error) {
    //             console.log(error.message);


    //         }
    //     }

    //     loadProyectos();
    // }, []);


    return (
        <section className="bg-gradient-to-b bg-[#17181d]">
        <div
            className='mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 flex flex-col  gap-10 lg:gap-12 py-12 text-white text-center  '
        >
            <h1 className=' font-semibold text-3xl sm:text-3xl md:text-5xl font-rocket text-orange-600'>
                Trabajos recientes
            </h1>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2'>

                {/* {randomUser.map(({ id, title, content, thumbnail }) => <Cardwork key={id} title={title} content={content} thumbnail={thumbnail} />)} */}
                
                <Cardwork/>
                <Cardwork/>
                <Cardwork/>
            </div>
        </div>
        </section>
    );
}