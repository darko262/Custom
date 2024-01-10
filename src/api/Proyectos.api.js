import axios from 'axios';


// Usa process.env para acceder a la variable de entorno
export const getAllProyectos = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list`);
};

export const getProyecto = (slug) => {
  const parametro = slug.slug
  return axios.get(`${process.env.REACT_APP_API_URL}/api/blog/detail/${parametro}`)



}

export const getproyectosByCategory = (slug) => {
  const parametro = slug.slug
  return axios.get(`${process.env.REACT_APP_API_URL}/api/blog/category?slug=${parametro}`)
}

export const getAllComent = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/contact/list`);
};
export const postComent = (formData, config) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/contact/`, formData, config);
};

export const getAllCategory = () => {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };
  return axios.get(`${process.env.REACT_APP_API_URL}/api/category/list`, config);
};