import axios from "axios";
import { GET_TOKO_TANI } from "./constant";

export const getTokoTani = () => {
	return axios.get(GET_TOKO_TANI);
};
