import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./students.db", (err) => {
  if (err) {
    console.error("DB Connection Error:", err);
  } else {
    console.log("SQLite Connected!");
  }
});

// CREATE TABLE if not exists
db.run(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        course TEXT NOT NULL
    )
`);

export default db;
