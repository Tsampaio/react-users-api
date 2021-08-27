import { UserInterface } from './App'

const getApiData = async (): Promise<UserInterface[]> => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const response = await fetch(url)
  const data = await response.json();
  console.log(data)
  return data
}

export default getApiData