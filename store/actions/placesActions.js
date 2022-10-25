import { getPlaces, insertPlace } from "../../db/index.js"
import { ADD_PLACE, LOAD_PLACES } from "../types/placesTypes.js"

export const addPlace = async (title, img, telephoneNum, adress) => {
    try {
        const result = await insertPlace(title, img, telephoneNum, adress)

        return {
            type: ADD_PLACE,
            payload: {
                id: result.insertId,
                title,
                img,
                telephoneNum,
                adress
            }
        }
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const loadPlaces = async () => {
    try {
        const result = await getPlaces()
        return {
            type: LOAD_PLACES,
            payload: result?.rows?._array
        }
    } catch (err) {
        console.log(err)
    }
}