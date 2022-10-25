import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL, img TEXT NOT NULL, adress TEXT NOT NULL, telephoneNum TEXT);',
                [],
                () => { resolve() },
                (_, err) => { reject(err) })
        })
    })

    return promise
}

export const insertPlace = (title, img, telephoneNum, adress) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO places (title, img, telephoneNum, adress) VALUES (?,?,?,?);',
                [title, img, telephoneNum, adress],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const getPlaces = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM places',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}