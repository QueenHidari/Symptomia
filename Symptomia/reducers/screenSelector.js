import homeMenu from '../index.android'

const screenSelector = (state = {...state, menu: homeMenu}, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return Object.assign({}, state, {
        menu: action.menu
      })
    default:
      return state
  }
}

export default screenSelector
