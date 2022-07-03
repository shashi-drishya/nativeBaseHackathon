import Axios from "axios";
// require('dotenv').config()

console.log(process.env.PIXEL_API_KEY);

export default Axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: "563492ad6f91700001000001131faa093c324dff8b59b9918d25cfc6",
  },
});
