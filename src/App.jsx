import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Home from './router/Home';
import Detail from './router/Detail';

function App() {
	return (
		<Router>
			<Header/>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/detail/:id" component={Detail}/>
					<Redirect path="*" to="/"/>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;

/*
* API KEY : process.env.REACT_APP_API_KEY
* search API : `${process.env.REACT_APP_SEARCH}?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_API_KEY}`
* popular API : `${process.env.REACT_APP_POPULAR}?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`
* */