import { ADD_MEMBER, LOAD_MEMBERS, REMOVE_MEMBER } from '../types/membersTypes.js'

const membersReducer = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_MEMBER:
            const newMember = {
                id: payload.id,
                name: payload.name
            }

            return [
                ...state,
                newMember
            ]
        case REMOVE_MEMBER:
            return state.filter(person => person.id != payload.id)
        case LOAD_MEMBERS:
            return payload
        default:
            return state
    }
}

export default membersReducer