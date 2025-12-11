import axios from "axios";
const app = axios.create({
    baseURL: "/Data/json/",
   
});




const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    delete: app.delete,
    patch: app.patch,
}


export default http;