// import Realm from 'realm'
const uuidV4 = require('uuid/v4')

/*
const eventSchema = {
  name: 'event',
  primaryKey: 'id',
  properties: {
    id: 'string',
    date: 'string',
    symptom: 'string',
    heartRate: {type: 'int', optional: true}
  }
}
*/

/*
let realm = new Realm({
  schema: [eventSchema],
  schemaVersion: 2,
  migration: function (oldRealm, newRealm) {
    // only apply this change if upgrading to schemaVersion 1
    if (oldRealm.schemaVersion < 2) {
      var oldObjects = oldRealm.objects('event')
      var newObjects = newRealm.objects('event')

      // loop through all objects and set the name property in the new schema
      for (var i = 0; i < oldObjects.length; i++) {
        newObjects[i].id = uuidV4()
        newObjects[i].date = '2017-2-17'
      }
    }
  }
})
*/
const localStorage = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
/*
      realm.write(() => {
        let event = realm.create('event', {
          id: uuidV4(),
          date: action.date,
          symptom: action.symptom
        })

        console.log(String(event))
      })
      let events = realm.objects('event')
      Object.assign({}, state, {
        events: events
      })
*/
      return Object.assign({}, state, {
        events: [
          ...state.events,
          {
            id: uuidV4(),
            date: action.date,
            symptom: action.symptom
          }
        ]
      })
    default:
      return state
  }
}

export default localStorage
