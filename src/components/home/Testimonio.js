
import { useEffect, useState } from "react"
import { postComent}	from '../../api/Proyectos.api'
export function Testimonio() {

    useEffect(() => {
        // Función para obtener el valor de una cookie por su nombre
        window.scrollTo(0, 0)
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(";").shift();
        };
        const token = getCookie("csrftoken");
        setCsrfToken(token);
    }, []);
    const [csrfToken, setCsrfToken] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        comentario: '',
    });
    const {
        name,
        comentario
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrfToken,
            }
        };

        const formData = new FormData()
        formData.append('name', name)
        formData.append('comentario', comentario)

        const fetchData = async () => {
            try {
                const res = await postComent(formData, config);
                console.log(res.data);

                if (res.data.status === 'success') {
                    console.log(res.data);
                    setFormData({
                        name: '',
                        comentario: '',
                    });
                    alert('Tu comentario fue creado!');
                } else {
                    alert('Error al crear comentario.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error en la solicitud.');
            }
        };

        fetchData();

    }


    return (
        <section className="bg-black h-screen pt-24">
            <div
                class="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
            >
                <h2 class="text-2xl font-bold text-white mb-6">Update Your Profile</h2>

                <form method="post" onSubmit={e => onSubmit(e)}>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-300" for="name"
                        >Full Name</label
                        >
                        <input
                            class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                            type="text"
                            name="name"
                            value={name}
                            required
                            onChange={e => onChange(e)}
                            autoComplete="name"
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-300"
                        >comentario</label
                        >
                        <input
                            class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                            name="comentario"
                            value={comentario}
                            required
                            onChange={e => onChange(e)}
                            autoComplete="comentario"
                        />
                    </div>



                    <div class="flex justify-end">
                        <button
                            class="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                            type="submit"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>

        </section>
    )

}