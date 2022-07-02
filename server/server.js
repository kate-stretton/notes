const express = require('express')
const path = require('path')

const notesRoutes = require('./routes/notes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/notes', notesRoutes)

module.exports = server
