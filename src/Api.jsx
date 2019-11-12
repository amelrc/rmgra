
export const getApi = async () => {
	
	const character = fetch('https://rickandmortyapi.com/api/character/?page=2');
	const location = fetch('https://rickandmortyapi.com/api/location');
	const episode = fetch('https://rickandmortyapi.com/api/episode');

 	return await Promise.all([character,location,episode])
	.then(values => Promise.all(values.map(value => value.json())))
	.then(json => json)
};


