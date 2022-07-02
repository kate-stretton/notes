const connection = require('./connection')

module.exports = {
  getNotes,
  addNote,
}

function getNotes(db = connection) {
  return db('notes').select()
}

function addNote(newNote, db = connection) {
  return db('notes')
    .insert({ text: newNote })
    .then(() => getNotes(db))
}
