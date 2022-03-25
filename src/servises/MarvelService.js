class MarvelService {
	#apiBase = 'https://gateway.marvel.com:443/v1/public/';
	#apiKey = '67917fa6e0f3d0853c5b2e5c84f10d51';
	_baseOffset = 210;
	getResourse = async url => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};
	getAllCharacters = async (offset = this._baseOffset) => {
		const res = await this.getResourse(
			`${this.#apiBase}characters?limit=9&offset=${offset}&apikey=${
				this.#apiKey
			}`
		);
		return res.data.results.map(this._transformCharacter);
	};
	getCharacter = async id => {
		const res = await this.getResourse(
			`${this.#apiBase}characters/${id}?apikey=${this.#apiKey}`
		);
		return this._transformCharacter(res.data.results[0]);
	};
	_transformCharacter = char => {
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
}

export default MarvelService;
