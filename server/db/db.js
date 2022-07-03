const connection = require('./connection')

module.exports = {
  getNotes,
  addNote,
  getNote,
  deleteNote,
}

function getNotes(db = connection) {
  return db('notes').select()
}

function getNote(id, db = connection) {
  return db('notes').where('id', id).select().first()
}

function addNote(text, db = connection) {
  //specifically has to match the text column or else
  return db('notes')
    .insert({ text })
    .then((ids) => {
      return getNote(ids[0])
    })
}

function deleteNote(id, db = connection) {
  return db('notes').where('id', id).delete()
}
