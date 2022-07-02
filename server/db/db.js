const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getNotes,
}

function getNotes(db = connection) {
  return db('notes').select()
}
