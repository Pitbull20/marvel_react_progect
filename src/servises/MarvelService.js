import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
	const { loading, request, error, clearError } = useHttp();
	const apiBase = 'https://gateway.marvel.com:443/v1/public/';
	const apiKey = '67917fa6e0f3d0853c5b2e5c84f10d51';
	let baseOffset = 210;

	const getAllCharacters = async (offset = baseOffset) => {
		const res = await request(
			`${apiBase}characters?limit=9&offset=${offset}&apikey=${apiKey}`
		);
		return res.data.results.map(transformCharacter);
	};
	const getAllComics = async (offset = baseOffset) => {
		const comics = await request(
			`${apiBase}comics?limit=8&offset=${baseOffset}&apikey=${apiKey}`
		);
		return comics.data.results.map(transformComics);
	};
	const getCharacter = async id => {
		const res = await request(
			`${apiBase}characters/${id}?apikey=${apiKey}`
		);
		return transformCharacter(res.data.results[0]);
	};
	const transformCharacter = char => {
		return {
			id: char.id,
			name: char.name,
			descpription: char.description
				? `${char.description.slice(0, 200)}...`
				: 'There is no description for this character',
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls.url,
			wiki: char.urls[1].url,
			comics: char.comics.items,
		};
	};
	const transformComics = comics => {
		return {
			thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
			title: comics.title,
			prise: comics.prices[0].price,
		};
	};
	return {
		loading,
		error,
		getAllCharacters,
		getCharacter,
		clearError,
		getAllComics,
	};
};

export default useMarvelService;
