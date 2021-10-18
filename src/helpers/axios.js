import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
});

instance.interceptors.request.use(
	async (config) => {
		config.headers = {
			"Content-Type": "application/json",
		};
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default instance;
