import Realm from 'realm'
const uuidV4 = require('uuid/v4')

const eventSchema = {
  name: 'event',
  primaryKey: 'id',
  properties: {
    id: 'int',
    date: 'date',
    symptom: 'string',
    heartRate: {type: 'int', optional: true}
  }
}

let realm = new Realm({schema: [eventSchema]})

const localStorage = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      realm.write(() => {
        let event = realm.create('event', {
          id: uuidV4(),
          date: action.date,
          symptom: action.symptom
        })

        console.log(String(event))
      })
      let events = realm.objects('event')
      state.events = events
      return state
    default:
      return state
  }
}

export default localStorage
