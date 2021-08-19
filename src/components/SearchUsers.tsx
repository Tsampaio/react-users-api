import React, { useState, useEffect } from 'react';
import './SearchUsers.css';
import { UserInterface } from './App';
import ReactPaginate from 'react-paginate';

const SearchUsers = ({ users, setUsers }: any) => {
	// Filtering
	const [selectedUsers, setSelectedUsers] = useState([]);
	const [filter, setFilter] = useState<string>('');

	//Pagination
	const [pageNumber, setPageNumber] = useState(0);

	useEffect(() => {
		setSelectedUsers(users);
	}, [users]);

	console.log(users, 'users');
	console.log(selectedUsers, 'selectedUsers');

	// returns true if filter is equal to a value of a users data
	const matchedValue = (element: any, searchFilter: string) => {
		let values = Object.values(element);
		let match = values.find((value: any) => {
			return value
				.toString()
				.toLowerCase()
				.includes(searchFilter.toLowerCase());
		});
		if (match) {
			return true;
		} else {
			return false;
		}
	};

	// Returns the index value of the matched users
	const foundUsers = (searchFilter: string) => {
		let idxOfMatches = users.filter((element: any) => {
			return matchedValue(element, searchFilter);
		});
		return idxOfMatches;
	};

	// sets selectedUsers to the search result for pagination
	const handleSubmit = (event: any) => {
		event.preventDefault();
		let found = foundUsers(filter);
		setSelectedUsers(found);
	};

	// Pagination
	const usersPerPage = 3;
	const usersSeen = pageNumber * usersPerPage;
	const displayUsers = selectedUsers
		.slice(usersSeen, usersSeen + usersPerPage)
		.map((user: any, index: number) => {
			return (
				<div key={index}>
					<div className="selected-user" key={index}>
						<div>User ID: {user.id}</div>
						<div>User Name: {user.name}</div>
						<div>Username: {user.username}</div>
						<div>Email: {user.email}</div>
						<div>Phone Number: {user.phone}</div>
						<div>Website: {user.website}</div>
					</div>
				</div>
			);
		});
	const pageCount = Math.ceil(selectedUsers.length / usersPerPage);
	const changePage = ({ selected }: any) => {
		setPageNumber(selected);
	};

	return (
		<>
			<div className="searchusers-wrapper">
				<h3>Search Users</h3>
				<div>
					<h4>Filter</h4>
					<form onSubmit={(event) => handleSubmit(event)}>
						<label>
							Name:
							<input
								type="text"
								value={filter}
								onChange={(e) => setFilter(e.target.value)}
							/>
						</label>
					</form>
				</div>
			</div>

			<div className="displayUsers-wrapper">{displayUsers}</div>

			<div className="pagination-wrapper">
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					pageCount={pageCount}
					onPageChange={changePage}
					pageRangeDisplayed={5}
					marginPagesDisplayed={2}
					containerClassName={'paginationBttns'}
					previousLinkClassName={'previousBtton'}
					nextLinkClassName={'nextBtton'}
					disabledClassName={'paginationDisabled'}
					activeClassName={'paginationActive'}
				/>
			</div>
		</>
	);
};

export default SearchUsers;
