import React, { useEffect, useState } from 'react';
import UserServices from '../services/UserServices';
import SearchUser from './SearchUser';
import User from './User';

const Users = () => {
	const [ users, setUsers ] = useState([]);

	const getUsers = async () => {
		const data = await UserServices.getUsers();
		setUsers(data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	const getUsersFromGithub = async (data) => {
		if (data !== '') {
			const searchResult = await UserServices.getUserSearch(data);
			setUsers(searchResult);
		} else {
			getUsers();
		}
	};

	return (
		<div>
			<div className="row">
				<div className="col-md-12">
					<SearchUser handleSearch={getUsersFromGithub} />
				</div>
			</div>
			<div className="row">
				{users.map((user) => (
					<div className="col-md-4" key={user.id}>
						<User user={user} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Users;
