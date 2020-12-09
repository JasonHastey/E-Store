const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes.js')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
	res.send('API running')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	5000,
	console.log(
		`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
