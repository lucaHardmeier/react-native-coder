import { ADD_PLACE } from "../types/placesTypes.js"
import * as FileSystem from 'expo-file-system';

export const addPlace = (title, img, telephoneNum, notes) => {

    return {
        type: ADD_PLACE,
        payload: {
            title,
            img,
            telephoneNum,
            notes
        }
    }
}