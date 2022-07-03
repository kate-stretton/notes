import React from 'react'
import { BsX} from "react-icons/bs"
//import {useDispatch } from 'react-redux'

function Note(props){
  //const dispatch = useDispatch()
  return(
    <div className='note'>
      <div className='delete-icon' key={props.note.id}><BsX/></div>
      <label>{props.note.text}</label>
      </div>
  )
}

export default Note