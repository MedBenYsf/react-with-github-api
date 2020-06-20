import React, { useState } from 'react';

const SearchUser = (props) => {
	const [ search, setSearch ] = useState('');

	const handleChange = (e) => {
		const value = e.currentTarget.value;
		setSearch(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSearch(search);
	};

	return (
		<form className="form-group" onSubmit={handleSubmit}>
			<input value={search} onChange={handleChange} className="form-control" type="text" placeholder="Search" />
			<button className="btn btn-primary btn-block" type="submit">
				Search
			</button>
		</form>
	);
};

export default SearchUser;
