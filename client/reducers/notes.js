import { SET_NOTES, ADD_NOTE, DELETE_NOTE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return action.notes
    case ADD_NOTE:
      return [...state, action.note]
    case DELETE_NOTE:
      return state.filter((note) => note !== action.payload)
    default:
      return state
  }
}

export default reducer
