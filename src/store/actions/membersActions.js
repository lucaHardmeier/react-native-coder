import { getMembers, insertMember, deleteMember } from "../../db/index.js"
import { ADD_MEMBER, LOAD_MEMBERS, REMOVE_MEMBER } from "../types/membersTypes.js"

export const addMember = async (name) => {
    try {
        const result = await insertMember(name)
        return {
            type: ADD_MEMBER,
            payload: {
                id: result.insertId,
                name
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export const removeMember = async (id) => {
    try {
        await deleteMember(id)
        return {
            type: REMOVE_MEMBER,
            payload: {
                id
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export const loadMembers = async () => {
    try {
        const result = await getMembers()
        return {
            type: LOAD_MEMBERS,
            payload: result?.rows?._array
        }
    } catch (err) {
        console.log(err)
    }
}