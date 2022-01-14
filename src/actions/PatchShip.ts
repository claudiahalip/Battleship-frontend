import axios from "axios";

const patchShip = async (URL: string, body: object) => {
  try {
    const response = await axios.patch(URL, body);
    const data = response.data;
    return data
  } catch (error) {
    console.log(error);
  }
};

export default patchShip;
