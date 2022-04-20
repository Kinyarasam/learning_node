const express = require('express')
const app = express()
const path = require('path')

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`)
})
