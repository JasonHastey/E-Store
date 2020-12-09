import './App.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route exact path='/' component={HomeScreen} />
					<Route exact path='/product/:id' component={ProductScreen} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App