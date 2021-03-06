import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_2ZUbxS3Lu0JN1Ip2qBOpPwpS00ompV3FlR');

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		//  will only run once the app will be load

		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user just logged in / the user was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/orders'>
						<Header />
						<Orders />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/payment'>
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
