import { SET_NOTES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return action.notes
    // case ADD_NOTE:
    //   return [...state, payload]
    default:
      return state
  }
}

export default reducer
