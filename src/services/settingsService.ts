import Axios from "axios";

const url = "https://622a2a18be12fc4538b4148c.mockapi.io/settings";

export const getSettings = async () => {
  try {
    const { data } = await Axios.get(url);

    return data[0];
  } catch (error) {
    return error;
  }
};
