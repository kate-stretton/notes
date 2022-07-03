// import React, {useEffect, useState} from 'react'
// import {useDispatch, useSelector} from 'react-redux'

// import { fetchNotes, addNote} from '../actions'

// // import Note from './Note'
// // import AddNote from  './AddNote'

// function Board(){
//   const [newNote, setNewNote] =useState('')
//   const notes = useSelector(state => state.notes)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchNotes())
//   }, [])

//   function handleChange (e) {
//     setNewNote(e.target.value)
//   }

//   function handleClick () {
//     dispatch(addNote(newNote))
//     setNewNote('')
//   }

//   return(
//     <>
//     <div className='board'>
//     {notes.map((note) => (
//           <div className='note' key={note}>{note}</div>
//         ))}
//     </div>
//     <div className='add-note'>
//       <input onChange={handleChange} value={newNote}/>
//       <button onClick={handleClick}>Add new note</button>
//     </div>
//     </>
//   )
// }

// export default Board

import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { fetchNotes} from '../actions'
import Note from './Note'

import AddNote from  './AddNote'

function Board(){
  //const [newNote, setNewNote] =useState('')
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNotes())
  }, [])

  // function handleChange (e) {
  //   setNewNote(e.target.value)
  // }

  // function handleClick () {
  //   dispatch(addNote(newNote))
  //   setNewNote('')
  // }

  return(
    <>
    <div className='board'>
    {notes.map((note, i) => (
      <Note key={i} note={note}/>
          ))}
    </div>
    {/* <div className='add-note'>
      <input onChange={handleChange} value={newNote}/>
      <button onClick={handleClick}>Add new note</button>
    </div> */}
    <AddNote/>
    </>
  )
}

export default Board