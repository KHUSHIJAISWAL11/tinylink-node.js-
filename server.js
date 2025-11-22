import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", studentRoutes);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
