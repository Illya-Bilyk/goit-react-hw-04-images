import axios from 'axios';

const APIkey = '30462047-0f8848268f4f2ac11df1ed33d';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  const params = `&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await axios.get(`?q=${query}&key=${APIkey}${params}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
