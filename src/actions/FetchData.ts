import axios from 'axios';

const fetchData = async (URL: string) => {
    try {
        const response = await axios.get(URL);
        const { data } = response;
        return data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export default fetchData;
