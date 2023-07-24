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
export async function postData (body) {
    const response = await axios.post(URL, body);
    console.log(response);
    console.log('Success');
    //const {data} = response;
    //console.log(data);
}


// Define index.js in services and export all of them