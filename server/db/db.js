const connection = require('./connection')

module.exports = {
  getNotes,
  addNote,
}

function getNotes(db = connection) {
  return db('notes').select()
}

function addNote(note, db = connection) {
  return db('notes')
    .insert(note)
    .then(([id]) => {
      return {
        id,
        ...note,
      }
    })
}
