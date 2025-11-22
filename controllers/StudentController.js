import {
    getAllStudents,
    insertStudent,
    getStudentById,
    updateStudent,
    deleteStudent
} from "../models/StudentModel.js";

export const homePage = (req, res) => {
    getAllStudents((err, rows) => {
        if (err) return res.send("DB error!");
        res.sendFile("index.html", { root: "./public" });
    });
};

export const listData = (req, res) => {
    getAllStudents((err, rows) => {
        if (err) return res.send("DB error!");
        res.json(rows);
    });
};

export const addPage = (req, res) => {
    res.sendFile("add.html", { root: "./public" });
};

export const addStudent = (req, res) => {
    const { name, email, course } = req.body;

    insertStudent(name, email, course, (err) => {
        if (err) return res.send("DB error!");
        res.redirect("/");
    });
};

export const editPage = (req, res) => {
    res.sendFile("edit.html", { root: "./public" });
};

export const updateStudentData = (req, res) => {
    const { name, email, course } = req.body;
    const id = req.params.id;

    updateStudent(id, name, email, course, (err) => {
        if (err) return res.send("DB error!");
        res.redirect("/");
    });
};

export const deleteStudentData = (req, res) => {
    deleteStudent(req.params.id, (err) => {
        if (err) return res.send("DB error!");
        res.redirect("/");
    });
};
