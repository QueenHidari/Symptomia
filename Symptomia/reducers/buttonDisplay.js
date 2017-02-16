const buttonDisplay = (state = {}, action) => {
  switch (action.type) {
    case 'ENABLE_BUTTON':
      return Object.assign({}, state, {
        buttonEnabled: true
      })
    case 'DISABLE_BUTTON':
      return Object.assign({}, state, {
        buttonEnabled: false
      })
    default:
      return state
  }
}

export default buttonDisplay
