import Place from "../../models/Place.js"
import { ADD_PLACE } from "../types/placesTypes.js"

const initialState = []

const placesReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_PLACE:
            const newPlace = {
                id: Date.now(),
                title: payload.title,
                img: payload.img,
                notes: payload.notes,
                telephoneNum: payload.telephoneNum
            }

            return [
                ...state,
                newPlace
            ]
        default:
            return state
    }
}

export default placesReducer