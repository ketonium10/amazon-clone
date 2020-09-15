import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-4fdc4/us-central1/api" //The API (cloud functon ) URL
});
//http://localhost:5001/clone-4fdc4/us-central1/api
//https://us-central1-clone-4fdc4.cloudfunctions.net/api
export default instance;
