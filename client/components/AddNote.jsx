// import React, {useState} from 'react'
// import {useDispatch} from 'react-redux'

// // import {addNote} from '../apis/notes'
// import {addNote} from '../actions'

// function AddNote() {
//   const [newNote, setNewNote] = useState('')
//   const dispatch = useDispatch()

//   function handleSubmit(e) {
//     e.preventDefault()
//     dispatch(addNote(newNote))
//     setNewNote('')
//   }

//   return <form onSubmit={handleSubmit}>
//     <label htmlFor='newNote'>Add note: </label>
//     <input id='newNote' type='text' name='note' value={newNote} onChange={e => setNewNote(e.target.value)} />
//     <input type='submit' value='Save' />
//   </form>
// }

// export default AddNote