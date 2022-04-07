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
	const getCharacter = async id => {
		const res = await request(
			`${apiBase}characters/${id}?apikey=${apiKey}`
		);
		return transformCharacter(res.data.results[0]);
	};
	const getAllComics = async (offset = 0) => {
		const comics = await request(
			`${apiBase}comics?limit=8&offset=${offset}&apikey=${apiKey}`
		);
		return comics.data.results.map(transformComics);
	};
	const getComic = async id => {
		const res = await request(
			`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${apiKey}`
		);
		return transformComics(res.data.results[0]);
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
			id: comics.id,
			title: comics.title,
			description: comics.description || 'There is no description',
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: 'No information about the number of pages',
			thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
			language: comics.textObjects.language || 'en-us',
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: 'not available',
		};
	};
	return {
		loading,
		error,
		getAllCharacters,
		getCharacter,
		clearError,
		getAllComics,
		getComic,
	};
};

export default useMarvelService;
