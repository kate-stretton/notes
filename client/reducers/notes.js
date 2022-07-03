import { SET_NOTES, ADD_NOTE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return action.notes
    case ADD_NOTE:
      return [...state, action.note]
    default:
      return state
  }
}

export default reducer
