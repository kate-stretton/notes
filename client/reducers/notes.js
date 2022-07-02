import { SET_NOTES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_NOTES:
      return payload
    default:
      return state
  }
}

export default reducer
