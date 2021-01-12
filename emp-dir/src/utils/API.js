import axios from "axios";

function API() {
  return axios.get("https://randomuser.me/api/?nat=us&results=10");
}
  
export default API;
