
export const getApi = async () => {

	const character = fetch('https://rickandmortyapi.com/api/character');
	const location = fetch('https://rickandmortyapi.com/api/location');
	const episode = fetch('https://rickandmortyapi.com/api/episode');

 const allData = await Promise.all([character,location,episode])
	.then(values => Promise.all(values.map(value => value.json())))
	.then(json => {
		console.log('this is the clg',json)
		// const character = json[0];
		// const location = json[1];
		// const episode = json[2];
		// const all = [ character, location, episode]
		return json;
	}
	)
	return allData;


};


