import { ADD_PLACE, LOAD_PLACES } from "../types/placesTypes.js"

const placesReducer = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_PLACE:
            const newPlace = {
                id: payload.id,
                title: payload.title,
                img: payload.img,
                adress: payload.adress,
                telephoneNum: payload.telephoneNum
            }

            return [
                ...state,
                newPlace
            ]
        case LOAD_PLACES:
            return payload
        default:
            return state
    }
}

export default placesReducer