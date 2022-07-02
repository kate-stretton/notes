import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchNotes } from '../actions'

import Note from './Note'

function Board(){
const notes = useSelector(state => state.notes)
const dispatch = useDispatch()


useEffect(() => {
  dispatch(fetchNotes())
}, [])

  return(
    <div className='board'>
    {notes.map((note) => (<Note key={note.id} id={note.id} text={note.text}/>))}
    </div>
  )
}

export default Board