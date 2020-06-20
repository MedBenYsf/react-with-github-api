import Axios from 'axios';

const getUsers = () => {
	return Axios.get('https://api.github.com/users').then((response) => response.data);
};

const getUserSearch = (data) => {
	return Axios.get(`https://api.github.com/search/users?q=${data}`).then((response) => response.data.items);
};

export default {
	getUsers,
	getUserSearch
};
