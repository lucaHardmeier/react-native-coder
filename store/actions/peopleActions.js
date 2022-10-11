import { ADD_PERSON, REMOVE_PERSON } from "../types/peopleTypes.js"

export const addPerson = (person) => {
    return {
        type: ADD_PERSON,
        payload: {
            name: person
        }
    }
}

export const removePerson = (id) => {
    return {
        type: REMOVE_PERSON,
        payload: {
            id
        }
    }
}