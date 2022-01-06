import axios from 'axios';
import { getBoardsURL } from '../api/api';

const fetchBoards = async () => {
    try {
        const response = await axios.get(getBoardsURL);
        const boards = response.data;

        return boards;
    } catch (error) {
        console.log(error);
    }
};

export default fetchBoards;
