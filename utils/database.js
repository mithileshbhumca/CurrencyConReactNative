import * as SQLite from 'expo-sqlite';
import { databaseName } from './constants';

export const createTable = async () => {
    console.log("initDB");
    try {
        const db = await SQLite.openDatabaseAsync(databaseName);
        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, country TEXT NOT NULL, code TEXT NOT NULL, amount REAL NOT NULL);
            `);
            console.log("DB creted");

    } catch (e) {
        console.error('initDB:', error);
    }
}

export const insertData = async (country, code, amount) => {
    try {
        const db = await SQLite.openDatabaseAsync(databaseName);
        const result = await db.runAsync('INSERT INTO history (country, code, amount) VALUES (?, ?, ?)', [country,code,amount]);
        console.log("result", result.lastInsertRowId,result.changes);

    } catch (e) {
        console.error('createTable:', error);
    }
}

export const fetchData = async () => {
    console.log("fetchData started");
    try {
        const db = await SQLite.openDatabaseAsync(databaseName);
        const allRows = await db.getAllAsync('SELECT * FROM history');
        console.log("data size", allRows.length);
        return allRows;
    } catch (e) {
        console.error('fetchData:', error);
    }
}
