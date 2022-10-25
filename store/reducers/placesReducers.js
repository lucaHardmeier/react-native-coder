import Place from "../../models/Place.js"
import { ADD_PLACE } from "../types/placesTypes.js"

const initialState = []

const placesReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), payload.title, payload.img, payload.notes, payload.telephoneNum)
            return [
                ...state,
                newPlace
            ]
        default:
            return state
    }
}

export default placesReducer