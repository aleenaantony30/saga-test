import axios from 'axios';

export const fetchAPIData = async (apiUrl) => {
    try {
        const response = await axios.get(apiUrl);
        const {data, status} = response;
        return status === 200 ? data : false;
    } catch (error) {
        return false;
    }
}