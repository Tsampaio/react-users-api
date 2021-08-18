import { useParams } from 'react-router-dom';

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
	users: any;
}

// Errors
const User = ({ users }: UserProps) => {
	let { userId }: any = useParams();

	userId = Number(userId);

	const displayId = userId + 1;

	return (
		<div>
			<div>{users[displayId] ? users[displayId].name : ''} </div>
		</div>
	);
};

export default User;
