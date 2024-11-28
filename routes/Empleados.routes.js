import { Router } from "express";
import { deleteCurso, getAllCursos, getIdCurso, postCurso, putCurso } from "../controllers/Empleados.controllers.js";


const empleado = Router();

empleado.get('/', getAllCursos)
empleado.get('/:id', getIdCurso)
empleado.post('/', postCurso)
empleado.put('/:id', putCurso)
empleado.delete('/:id', deleteCurso)

export default empleado