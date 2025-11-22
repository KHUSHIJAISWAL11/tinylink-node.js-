import db from "../db.js";

export const getAllStudents = (callback) => {
    db.all("SELECT * FROM students", [], callback);
};

export const insertStudent = (name, email, course, callback) => {
    db.run(
        "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
        [name, email, course],
        callback
    );
};

export const getStudentById = (id, callback) => {
    db.get("SELECT * FROM students WHERE id = ?", [id], callback);
};

export const updateStudent = (id, name, email, course, callback) => {
    db.run(
        "UPDATE students SET name=?, email=?, course=? WHERE id=?",
        [name, email, course, id],
        callback
    );
};

export const deleteStudent = (id, callback) => {
    db.run("DELETE FROM students WHERE id=?", [id], callback);
};
