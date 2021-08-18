import './UsersList.css';
import { Link } from 'react-router-dom';

// TYpescript does not take Users interface here
const UsersList = ({ users }: any): JSX.Element => {
	const showUsers = users.map((item: any, index: number) => {
		return (
			<div className="entry" key={index}>
				<div className="name">
					<Link to={`user/${item.id}`}>{item.name} </Link>
				</div>
				<div className="city">{item.address.city}</div>
			</div>
		);
	});

	return (
		<div className="wrapper">
			<div className="list">
				<h3>List of Users</h3>
				{typeof users[0] == 'object' ? showUsers : ''}
			</div>
		</div>
	);
};

export default UsersList;
