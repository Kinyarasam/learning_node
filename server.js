const express = require('express')
const app = express()
const path = require('path')
const members = require('./model/Members')

const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
	next()
}

// Init middleware
app.use(logger) 

//Gets All Members
app.get('/api/members', (req, res) => {
	res.json(members)
})

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`)
})
