import axios from "axios";

const baseURL = "http://192.168.0.104:8000";

export const api = axios.create({
	baseURL,
});
