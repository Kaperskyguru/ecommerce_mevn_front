import axios from "axios";

const baseDomain = "http://127.0.0.1:8083";
const baseURL = `${baseDomain}/api`;

export default axios.create({
    baseURL,
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYxNzM0ODA4fQ.tU2NAP7EUG76AcT47xVeKkokvEUmvLEIUTizL_U1j_s"
    }
});