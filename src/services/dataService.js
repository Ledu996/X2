import axios from "axios";

const URL = process.env.REACT_APP_POSTS_URL;


export async function getData () {
    const response = await axios.get(URL);
    const {data} = response;
    return data;
}

export async function getDataById (id) {
    const response = await axios.get(`${URL}/${id}`);
    const {data} = response;
    return data;
}
export async function postData (body) {
    const response = await axios.post(URL, body);
    console.log(response);
    console.log('Success');
}

export async function patchData(id, body) {
    const response = await axios.patch(`${URL}/${id}`, body);
    console.log(response);
}

export async function deleteData (id) {
    const response = await axios.delete(`${URL}/${id}`);
    console.log(response);
}