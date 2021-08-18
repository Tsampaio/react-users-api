import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import User from './User';

// Errors
export interface UsersInterface {
	[key: string]: any;
	company: {};
	email: string;
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
}

const App = (): JSX.Element => {
	// in this notation the users array could still be empty
	// Errors
	const [users, setUsers] = useState<any[]>([]);

	useEffect(() => {
		const url = 'https://jsonplaceholder.typicode.com/users';

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUsers(data);
			});
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={`/user/:userId`}>
					<User users={users} />
				</Route>

				<Route exact path={`/users`}>
					<UsersList users={users} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
