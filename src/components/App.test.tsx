import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import getApiData from './getApiData';
import { UserInterface } from './App'

jest.mock('./getApiData')

const getApiDataMock = getApiData as jest.MockedFunction<typeof getApiData>
describe('UserList', () => {

	beforeEach(() => {
		const users: UserInterface[] = [
			{
				address: '123',
				company: { name: 'Microsoft' },
				email: 'john@email.com',
				id: 1,
				name: 'John',
				phone: '0007',
				username: 'johny',
				website: 'http://johny.com'
			}
		]

		getApiDataMock.mockResolvedValue(users)
	})


	it('should find the word in the document', () => {
		render(<App />);
		const headerElement = screen.getByRole('heading', { name: 'List of Users' });
		expect(headerElement).toBeInTheDocument();
	})

	it('should render the mocked APi data', async () => {

		// getApiDataMock.mockImplementation(() => users)

		render(<App />);

		expect(await screen.findByText(/John/i)).toBeInTheDocument();
	});

})
