import React from 'react';

const User = (props) => {
	const { avatar_url, login, html_url, repos_url } = props.user;
	return (
		<div className="card">
			<img className="card-img-top" src={avatar_url} alt="" />
			<div className="card-body">
				<h4 className="card-title">{login}</h4>
				<p className="card-text">
					<a href={html_url} className="btn btn-primary">
						Show more
					</a>
					<a href={repos_url} className="btn btn-warning">
						Repositories
					</a>
				</p>
			</div>
		</div>
	);
};

export default User;
