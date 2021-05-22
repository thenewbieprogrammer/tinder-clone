import axios from 'axios';

const herokuBaseURL = "https://tinder-backend-clone-0.herokuapp.com/";
const localURL = "http://localhost:8001/";
const instance = axios.create({
  baseURL: herokuBaseURL
});

export default instance;