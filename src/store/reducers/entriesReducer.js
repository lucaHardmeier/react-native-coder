import { ADD_ENTRY, LOAD_ENTRIES, REMOVE_ENTRY } from '../types/entriesTypes.js'

const entriesReducer = (state = [], action) => {
    const { type, payload } = action
    console.log('entry payload', payload)
    const { id, reference, id_creditor, id_debtor, amount, timestamp } = payload

    switch (type) {
        case ADD_ENTRY:
            const newMember = {
                id, reference, id_creditor, id_debtor, amount, timestamp
            }
            return [
                ...state,
                newMember
            ]
        case REMOVE_ENTRY:
            return state.filter(entry => entry.id != payload.id)
        case LOAD_ENTRIES:
            return payload
        default:
            return state
    }
}

export default entriesReducer