import axios from "axios";

const patchShip = async (URL: string, body: object) => {
  try {
    const response = await axios.patch(URL, body)
    return response.data
  } catch (error: any) {
    throw new Error(error)
  }
};

export default patchShip;
