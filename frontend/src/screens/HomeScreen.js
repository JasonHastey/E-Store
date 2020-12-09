import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
	const [products, setproducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await axios.get('/api/products')
			setproducts(res.data)
		}
		fetchProducts()
	}, [])

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col sm={12} md={4} lg={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomeScreen
