const connection = require('./connection')

module.exports = {
  getNotes,
}

function getNotes(db = connection) {
  return db('notes').select()
}
