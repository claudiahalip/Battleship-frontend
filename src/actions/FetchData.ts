import axios from 'axios';

const fetchData = async (URL: string) => {
    try {
        const response = await axios.get(URL);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default fetchData;
