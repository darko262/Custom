import axios from 'axios';

export const getAllProyectos = () =>{
    
    return axios.get(`http://127.0.0.1:8000/api/blog/list`)
    

}
export const getProyecto = (slug) =>{
    const parametro = slug.slug
    return axios.get(`http://127.0.0.1:8000/api/blog/detail/${parametro}`)
    
    

}