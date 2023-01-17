import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '11240134-58b8f655e9e0f8ae8b6e8e7de';
const IMG_PER_PAGE = 9;

async function findImages(query, page = 1) {
  const url = `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMG_PER_PAGE}`;
  const response = await axios.get(url);
  return response.data;
}

const api = {
  findImages,
};

export default api;
