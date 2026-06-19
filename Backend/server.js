const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

console.log("***** VERSION NUEVA DEL SERVIDOR *****");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado correctamente a MongoDB"))
    .catch(error => console.log("Error al conectar con MongoDB:", error));

const tareaSchema = new mongoose.Schema({
    id: Number,
    titulo: String,
    url: String
});

const Tarea = mongoose.model("Tarea", tareaSchema);

app.get("/", (req, res) => {
    res.send("SERVIDOR NUEVO 18 JUNIO");
});

app.get("/prueba", (req, res) => {
    res.send("Ruta de prueba funcionando");
});

app.get("/api/tareas", async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener tareas",
            error: error.message
        });
    }
});

app.post("/api/tareas", async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        await nuevaTarea.save();

        res.json({
            mensaje: "Tarea guardada correctamente",
            tarea: nuevaTarea
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al guardar la tarea",
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
