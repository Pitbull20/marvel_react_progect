import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import { MainPage, ComicsPage } from '../pages';

const App = props => {
	return (
		<BrowserRouter>
			<div className='app'>
				<AppHeader />
				<main>
					<Routes>
						<Route
							path='/marvel_react_progect'
							element={<MainPage />}
						/>
						<Route 
							path='/comics' 
							element={<ComicsPage />} 
						/>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
