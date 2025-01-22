
// Open or create the database

import { SQLiteDatabase } from "expo-sqlite";

 const db= SQLiteDatabase
// import { SQLiteDatabase } from "expo-sqlite";

//const db = await npm list expo-sqlite
// .openDatabaseAsync('currency_history.db');

// Initialize the database table
// export const initializeDatabase = () => {
//   db.execAsync((tx) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS history (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         country TEXT NOT NULL,
//         amount TEXT NOT NULL
//       );`,
//       [],
//       () => console.log("Table created successfully!"),
//       (_, error) => console.error("Error creating table: ", error)
//     );
//   });
// };

// export const initializeDatabase = async () => {
//     try {
//       await db.transactionAsync(async (tx) => {
//         await tx.executeSql('CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, country TEXT NOT NULL, amount TEXT NOT NULL)');
//       });
//     } catch (error) {
//       console.error('Error creating table:', error);
//     }
//   };



// export const initializeDatabase = await db.execAsync(`
//     PRAGMA journal_mode = WAL;
//     CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY AUTOINCREMENT, country TEXT NOT NULL, amount TEXT NOT NULL);
//     `);
// // Save data to the database
// export const saveHistory = (country, amount) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       `INSERT INTO history (country, amount) VALUES (?, ?);`,
//       [country, amount],
//       () => console.log("Data inserted successfully!"),
//       (_, error) => console.error("Error inserting data: ", error)
//     );
//   });
// };

// // Fetch data from the database
// export const fetchHistory = (callback) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       `SELECT * FROM history;`,
//       [],
//       (_, { rows }) => callback(rows._array),
//       (_, error) => console.error("Error fetching data: ", error)
//     );
//   });
// };


