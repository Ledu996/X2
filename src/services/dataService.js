import axios from "axios";

const URL = process.env.REACT_APP_POSTS_URL;

export async function getData () {
    const response = await axios.get(URL);
    const {data} = response;
    return data;
} 
export async function postData (body) {
    const response = await axios.post(URL, body);
    console.log(response);
    console.log('Success');
}
