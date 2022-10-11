import { ADD_PERSON, REMOVE_PERSON } from '../types/peopleTypes.js'

const initialState = []
let idNumber = 0

const peopleReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_PERSON:
            return [
                ...state,
                {
                    id: ++idNumber,
                    name: payload.name,
                    outgo: 0,
                }
            ]
        case REMOVE_PERSON:
            return state.filter(person => person.id != payload.id)
        default:
            return state
    }
}

export default peopleReducer