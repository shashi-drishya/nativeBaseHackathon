import Axios from "axios";
// require('dotenv').config()

export default Axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    // Authorization: process.env.PIX,
    Authorization: "563492ad6f91700001000001131faa093c324dff8b59b9918d25cfc6",
  },
});
