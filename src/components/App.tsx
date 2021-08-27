import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import User from './User';
import SearchUsers from './SearchUsers';
import Navbar from './Navbar';
import getApiData from './getApiData';

export interface UserInterface {
	// obj with key string, unknown what is in
	[key: string]: any
	// Record says it's obj -> key is either address, name or some other string
	// values after comma -> what we excpect -> string or number
	company: Record<'address' | 'name' | string, string | number>;
	email: string;
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
}

// React.FC is used to define what props we insert from parent to child
// here App is just parent, we therefore defined it as empty {}
const App: React.FC<{}> = () => {
	// in this notation the users array could still be empty
	const [users, setUsers] = useState<UserInterface[]>([]);
	const [loading, setLoading] = useState(true);

	const updateUsers = async () => {
		const data = await getApiData();
		console.log(data);
		setUsers(data);
		setLoading(false);
	}

	useEffect(() => {
		updateUsers()
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
					<SearchUsers users={users} setUsers={setUsers} loading={loading} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
