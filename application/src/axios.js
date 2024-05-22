import axios from 'axios'
import { baseUrl } from "./Components/constans/constans";

const instance = axios.create({
    baseURL: baseUrl,
 
  });

  export default instance