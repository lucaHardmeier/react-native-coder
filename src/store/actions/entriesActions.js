import { getEntries, insertEntry, deleteEntry } from "../../db/index.js"
import { ADD_ENTRY, LOAD_ENTRIES, REMOVE_ENTRY } from "../types/entriesTypes.js"

export const addEntry = async (reference, id_creditor, id_debtor, amount, timestamp) => {
    try {
        const result = await insertEntry(reference, id_creditor, id_debtor, amount, timestamp)
        return {
            type: ADD_ENTRY,
            payload: {
                id: result.insertId,
                reference,
                id_creditor,
                id_debtor,
                amount, timestamp
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export const removeEntry = async (id) => {
    try {
        await deleteEntry(id)
        return {
            type: REMOVE_ENTRY,
            payload: {
                id
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export const loadEntrys = async () => {
    try {
        const result = await getEntries()
        return {
            type: LOAD_ENTRIES,
            payload: result?.rows?._array
        }
    } catch (err) {
        console.log(err)
    }
}