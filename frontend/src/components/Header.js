import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'

import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand to='/'>E-Store</Navbar.Brand>
					</LinkContainer>
					<Nav className='ml-auto'>
						<Nav.Link href='/cart'>
							<i className='fas fa-shopping-cart mr-1' />
							Cart
						</Nav.Link>
						<Nav.Link href='/login'>
							<i className='fas fa-user mr-1' />
							Sign In
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
