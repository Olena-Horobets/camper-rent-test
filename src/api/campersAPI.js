import axios from 'axios';

axios.defaults.baseURL = 'https://6649f846a300e8795d408d1e.mockapi.io/campers';

export const getAllCampers = async () => {
  const { data } = await axios.get('/');
  return data;
};
