  import axios from 'axios';

 const fetchBoards = async () => {
    const apiURL = 'http://localhost:8080/boards';
      try {
        const response = await axios.get(apiURL);
        const boards = response.data;

        return (boards);
      } catch (error) {
        console.log(error);
      }
    };

    export default fetchBoards;