import axios from "axios";

export default async function AxiosAPI(props) {
    // props.url
    // props.request
    // props.package


    axios.get(`${props.url}`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    })

}