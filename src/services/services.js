import axios from 'axios';

export const getData = (query='cat', page=1) => {
    return axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=16056306-b774bb8eb3846f9eca7b7b057&image_type=photo&orientation=horizontal&per_page=12`)
};











