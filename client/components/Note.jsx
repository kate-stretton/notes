import React from 'react'
import { BsX} from "react-icons/bs"
//import {useDispatch } from 'react-redux'

function Note(props){
  //const dispatch = useDispatch()
  return(
    <div className='note'>
      <label>{props.note.text}</label>
      <button key={props.note.id}><BsX/></button>
      </div>
  )
}

export default Note