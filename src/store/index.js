import { createStore } from 'redux'

const INITIAL_STATE = {
  data: ['React Native', 'ReactJS']
}

// Reducer, pode ser posto em outro arquivo
function courses (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] }
    default:
      return state
  }
}

const store = createStore(courses)

export default store
