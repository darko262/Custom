import axios from 'axios';


// Usa process.env para acceder a la variable de entorno
export const getAllProyectos = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list`);
};

export const getProyecto = (slug) =>{
    const parametro = slug.slug
    return axios.get(`${process.env.REACT_APP_API_URL}/api/blog/detail/${parametro}`)
    
    

}

export const getproyectosByCategory = (slug) =>{
  const parametro = slug.slug
  return axios.get(`${process.env.REACT_APP_API_URL}/api/blog/category?slug=${parametro}`)
}