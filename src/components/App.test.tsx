import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('ss', () => {
	render(<App />);
	const headerElement = screen.getByRole('heading', { name: 'List of Users' });
	expect(headerElement).toBeInTheDocument();
});
