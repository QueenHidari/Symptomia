export const setScreen = (screen) => {
  return {
    type: 'SET_SCREEN',
    menu: screen
  }
}

export const enableButton = () => {
  return {
    type: 'ENABLE_BUTTON'
  }
}

export const disableButton = () => {
  return {
    type: 'DISABLE_BUTTON'
  }
}

export const setDate = (date) => {
  return {
    type: 'SET_DATE',
    date: date
  }
}

export const addEvent = (date, symptom) => {
  return {
    type: 'ADD_EVENT',
    date: date,
    symptom: symptom
  }
}
