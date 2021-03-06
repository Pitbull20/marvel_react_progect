import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../servises/MarvelService';
import ErrorMessage from '../errorMessage/errorMesssage';
import Spinner from './../Spinner/Spinner';
import './comicsList.scss';

const ComicsList = () => {
	const [comicsList, setComicsList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	// eslint-disable-next-line
	const [charEnded, setCharEnded] = useState(false);
	const { loading, error, getAllComics } = useMarvelService();

	useEffect(() => {
		//eslint-disable-next-line
		onRequest(offset, true);
		//eslint-disable-next-line
	}, []);
	function onRequest(offset, initial) {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(offset).then(onComicsListLoaded);
	}
	function onComicsListLoaded(newComicsList) {
		let ended = false;
		if (newComicsList.length < 8) {
			ended = true;
		}

		setComicsList(comicsList => [...comicsList, ...newComicsList]);
		setNewItemLoading(newItemLoading => false);
		setOffset(offset => offset + 8);
		//eslint-disable-next-line
		setCharEnded(charEnded => ended);
	}
	function renderItems(arr) {
		const items = arr.map((item, i) => {
			let imgStyle = { objectFit: 'cover' };
			if (
				item.thumbnail ===
				'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
			) {
				imgStyle = { objectFit: 'unset' };
			}
			return (
				<li key={i} className='comics__item'>
					<Link to={`comics/${item.id}`}>
						<img
							src={item.thumbnail}
							alt='ultimate war'
							style={imgStyle}
							className='comics__item-img'
						/>
						<div className='comics__item-name'>{item.title}</div>
						<div className='comics__item-price'>
							{`${item.prise}$` || 'NOT AVAILABLE'}
						</div>
					</Link>
				</li>
			);
		});
		return <ul className='comics__grid'>{items}</ul>;
	}
	const items = renderItems(comicsList);
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;
	return (
		<div className='comics__list'>
			{errorMessage}
			{spinner}
			{items}
			<button className='button button__main button__long'>
				<div className='inner' onClick={() => onRequest(offset, false)}>
					load more
				</div>
			</button>
		</div>
	);
};

export default ComicsList;
