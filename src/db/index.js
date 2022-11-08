import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.organivacas')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        try {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, img TEXT NOT NULL, adress TEXT NOT NULL, telephoneNum TEXT);',
                )
            })
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY NOT NULL, reference TEXT NOT NULL, id_creditor INTEGER NOT NULL, id_debtor TEXT NOT NULL, amount REAL NOT NULL, timestamp INTEGER NOT NULL);',
                )
            })
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS members (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL);',
                )
            })
            resolve()
        } catch (err) {
            reject(err)
        }
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


export const insertEntrie = (reference, id_creditor, id_debtor, amount) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO entries (reference, id_creditor, id_debtor, amount, timestamp) VALUES (?,?,?,?,?);',
                [reference, id_creditor, id_debtor.join(), amount, Date.now()],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const getEntries = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM entries',
                [],
                (_, result) => {
                    for (const entrie of result) {
                        entrie.id_debtor.split()
                    }
                    console.log(result)
                    resolve(result)
                },
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const insertMember = (name) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO members (name) VALUES (?);',
                [name],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const deleteMember = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM members WHERE id = ?;',
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const getMembers = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM members',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}
