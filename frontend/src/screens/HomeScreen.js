import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { listProducts } from '../redux/actions/productActions'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const productList = useSelector(state => state.productList)
	const { loading, error, products } = productList
	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{products.map(product => (
						<Col sm={12} md={4} lg={3} key={product.id}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	)
}

export default HomeScreen
