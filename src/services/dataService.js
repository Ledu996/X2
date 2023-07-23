import axios from "axios";

const URL = process.env.REACT_APP_POSTS_URL;

// service for data 
// create two different services for retrieving and creating data 

// dataService

// retriveData
// postItem

export async function getData () {
    const response = await axios.get(URL);
    const {data} = response;
    return data;
} 
export async function postData (body) {}


/*export function axiosService ({method, url, body}) {
    
    async function doFetch () {
        const response = await axios[method](url, body);
        const {data} = response;
        return data;
    }

    return { doFetch };
}*/