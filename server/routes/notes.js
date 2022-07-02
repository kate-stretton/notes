const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getNotes()
    .then((results) => {
      res.json({ notes: results.map((note) => note) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req, res) => {
  const note = req.body
  db.addNote(note)
    .then((results) => {
      console.log('post route:', results)
      res.json(results)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
