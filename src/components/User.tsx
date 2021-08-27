import { useParams } from 'react-router-dom';
import './User.css';
import { UserInterface } from './App';

// Errors
export interface Users {
	[key: string]: any;
	company: {};
	email: string;
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
}

interface UserProps {
	users: UserInterface[];
}

const User: React.FC<UserProps> = ({ users }) => {
	let { userId }: { userId?: string | number } = useParams();

	const user = users.find((user) => user.id == userId);

	if (user) {
		return (
			<div className="user-wrapper">
				<h3>User Info</h3>
				<div className="user-info">Name: {user.name} </div>
				<div className="user-info">Email: {user.email} </div>
				<div className="user-info">Phone Number {user.phone} </div>
				<div className="user-info">Website {user.website} </div>
				<div className="user-info">City: {user.address.city} </div>
				<div className="user-info">Zip Code: {user.address.zipcode} </div>
				<div className="user-info">Street: {user.address.street} </div>
			</div>
		);
	} else return <div></div>;
};

export default User;
