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

// Errors
interface UserProps {
	users: UserInterface[];
}

// Errors
const User = ({ users }: UserProps): any => {
	let { userId }: any = useParams();

	userId = Number(userId);

	const displayId = userId - 1;

	if (users[displayId]) {
		return (
			<div className="user-wrapper">
				<h3>User Info</h3>
				<div className="user-info">Name: {users[displayId].name} </div>
				<div className="user-info">Email: {users[displayId].email} </div>
				<div className="user-info">Phone Number {users[displayId].phone} </div>
				<div className="user-info">Website {users[displayId].website} </div>
				<div className="user-info">City: {users[displayId].address.city} </div>
				<div className="user-info">
					Zip Code: {users[displayId].address.zipcode}{' '}
				</div>
				<div className="user-info">
					Street: {users[displayId].address.street}{' '}
				</div>
			</div>
		);
	} else return <div></div>;
};

export default User;
