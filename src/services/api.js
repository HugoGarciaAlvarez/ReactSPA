import axios from 'axios';

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 10000,
});

export async function getUsers() {
	const { data } = await api.get('/users');
	return data;
}

export default api;

