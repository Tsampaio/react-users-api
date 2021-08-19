import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import User from './User';
import SearchUsers from './SearchUsers';
import Navbar from './Navbar';

// Not sure what first is and company {} also not clear
export interface UserInterface {
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
	const [users, setUsers] = useState<any>([]);

	useEffect(() => {
		const url = 'https://jsonplaceholder.typicode.com/users';

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path={`/`}>
					<UsersList users={users} />
				</Route>

				<Route exact path={`/user/:userId`}>
					<User users={users} />
				</Route>

				<Route exact path={`/search`}>
					<SearchUsers users={users} setUsers={setUsers} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
