import React from 'react'
import {connect} from 'react-redux'
//import {useDispatch } from 'react-redux'

function Note(props){
  //const dispatch = useDispatch()
  return(
    <div className='note'>
      <label>{props.note.text}</label>
      </div>
  )
}

export default connect()(Note)