class MarvelService {
	#apiBase = 'https://gateway.marvel.com:443/v1/public/';
	#apiKey = '67917fa6e0f3d0853c5b2e5c84f10d51';
	getResourse = async url => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};
	getAllCharacters = async () => {
		const res = await this.getResourse(
			`${this.#apiBase}characters?limit=9&offset=210&apikey=${
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
	descriptionValidation = descp => {
		if (!descp) {
			return 'No description';
		} else if (descp.split('').length > 40) {
			return descp.slice(0, 40) + '...';
		}
	};
	_transformCharacter = char => {
		return {
			name: char.name,
			descpription: this.descriptionValidation(char.descpription),
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls.url,
			wiki: char.urls[1].url,
		};
	};
}

export default MarvelService;
