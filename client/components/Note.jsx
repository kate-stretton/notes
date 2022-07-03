import React from 'react'
import { BsX } from "react-icons/bs"
import {removeNote, fetchNotes} from '../actions'
import {useDispatch}from 'react-redux'


function Note(props){
  const dispatch = useDispatch()

  function handleDelete(){
    dispatch(removeNote(props.note.id))
    .then(dispatch(fetchNotes()))
    .catch((err) => {
      console.log(err)
    })
  }

  return(
    <div className='note'>
      <div className='note-header'>
        <small>Date</small>
        <i className='delete-icon' onClick={handleDelete} id={props.note.id}><BsX/></i>
      </div>
      <div className='note-body'>
        <label>{props.note.text}</label>
      </div>
    </div>
  )
}

export default Note