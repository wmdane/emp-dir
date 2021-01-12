import axios from "axios";

function API() {
  return axios.get("https://randomuser.me/api/?nat=us&results=100");
}
  
export default API;
