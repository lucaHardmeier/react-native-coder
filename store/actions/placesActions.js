import { ADD_PLACE } from "../types/placesTypes.js"
import * as FileSystem from 'expo-file-system';

export const addPlace = (title, img, telephoneNum, notes) => {

    const fileName = img.split('/').pop()
    const Path = FileSystem.documentDirectory + fileName

    console.log(Path)
    try {
        FileSystem.moveAsync({
            from: img,
            to: Path
        })
    } catch (err) {
        console.log(err.message)
        throw err
    }

    return {
        type: ADD_PLACE,
        payload: {
            title,
            telephoneNum,
            notes,
            img: Path
        }
    }
}