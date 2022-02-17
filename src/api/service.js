import axios from "axios";

const service = axios.create({
	baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
});

export default service;
