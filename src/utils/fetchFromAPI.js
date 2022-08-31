// this is our utility function for fetching the API data
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// we get the response from the request (the data) and immediately destructure it. We add the url string as a param. That will allow us to do something like '/BASE_URL/xxx' with xxx being dynamic (giving us more endpoint flexibility)
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data;
}