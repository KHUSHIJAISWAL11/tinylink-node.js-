import express from "express";
import {
    homePage,
    addPage,
    addStudent,
    editPage,
    updateStudentData,
    deleteStudentData,
    listData
} from "../controllers/StudentController.js";

const router = express.Router();

router.get("/", homePage);
router.get("/data", listData);

router.get("/add", addPage);
router.post("/add", addStudent);

router.get("/edit/:id", editPage);
router.post("/edit/:id", updateStudentData);

router.get("/delete/:id", deleteStudentData);

export default router;
